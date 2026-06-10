import { useEffect, useState } from 'react'

const sheetUrl = import.meta.env.VITE_APPLICATIONS_SHEET_CSV_URL
const refreshIntervalMs = 60_000

const statusClass = {
  'To apply': 'to-apply',
  Applied: 'applied',
  Interview: 'interview',
  Offer: 'offer',
  Hired: 'hired',
  Rejected: 'rejected',
}

function parseCsv(text) {
  const rows = []
  let currentRow = []
  let currentCell = ''
  let insideQuotes = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const nextChar = text[index + 1]

    if (char === '"' && insideQuotes && nextChar === '"') {
      currentCell += '"'
      index += 1
    } else if (char === '"') {
      insideQuotes = !insideQuotes
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell.trim())
      currentCell = ''
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        index += 1
      }
      currentRow.push(currentCell.trim())
      rows.push(currentRow)
      currentRow = []
      currentCell = ''
    } else {
      currentCell += char
    }
  }

  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell.trim())
    rows.push(currentRow)
  }

  return rows.filter((row) => row.some(Boolean))
}

function normalizeApplications(csvText) {
  const parsedRows = parseCsv(csvText)
  const headerRowIndex = parsedRows.findIndex((row) => {
    const normalizedHeaders = row.map((header) => header.toLowerCase())
    return normalizedHeaders.includes('company') && normalizedHeaders.includes('position')
  })

  if (headerRowIndex === -1) {
    return []
  }

  const headers = parsedRows[headerRowIndex]
  const rows = parsedRows.slice(headerRowIndex + 1)
  const headerIndexes = headers.reduce((indexes, header, index) => {
    indexes[header.toLowerCase()] = index
    return indexes
  }, {})

  return rows
    .map((row) => ({
      applied: row[headerIndexes.applied] || '',
      company: row[headerIndexes.company] || '',
      position: row[headerIndexes.position] || '',
      deadline: row[headerIndexes['application deadline']] || '',
      status: row[headerIndexes.status] || 'To apply',
      link: normalizeUrl(row[headerIndexes.link] || ''),
    }))
    .filter((application) => application.company || application.position)
}

function normalizeUrl(value) {
  if (!value) {
    return ''
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }

  return `https://${value}`
}

function Applications() {
  const [applications, setApplications] = useState([])
  const [isLoading, setIsLoading] = useState(Boolean(sheetUrl))
  const [error, setError] = useState(sheetUrl ? '' : 'Google Sheets URL is not configured.')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    if (!sheetUrl) {
      return
    }

    const controller = new AbortController()

    async function loadApplications({ showLoading = false } = {}) {
      if (showLoading) {
        setIsLoading(true)
      }

      try {
        const url = new URL(sheetUrl)
        url.searchParams.set('cacheBust', Date.now().toString())
        const response = await fetch(url.toString(), { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Could not load Google Sheet data.')
        }

        const csvText = await response.text()
        const sheetApplications = normalizeApplications(csvText)
        setApplications(sheetApplications)
        setError('')
        setLastUpdated(
          new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }).format(new Date()),
        )
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError('Could not load Google Sheet data.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadApplications({ showLoading: true })
    const intervalId = window.setInterval(loadApplications, refreshIntervalMs)

    return () => {
      controller.abort()
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="page">
      <section className="page-intro applications-intro">
        <p className="eyebrow">Applications</p>
        <h1>Job application tracker</h1>
        <p className="lead">
          A structured overview based on my Google Sheets setup, showing applied dates,
          companies, positions, deadlines, statuses and links.
        </p>
      </section>

      <section className="section applications-section" aria-label="Job applications">
        <div className="applications-toolbar">
          <p>
            {sheetUrl ? 'Connected to Google Sheets' : 'Google Sheets not configured'}
            {lastUpdated ? <span className="last-updated">Last updated {lastUpdated}</span> : null}
          </p>
          {isLoading ? <span>Loading applications...</span> : null}
          {error ? <span className="applications-error">{error}</span> : null}
        </div>

        <div className="applications-table-wrap">
          <table className="applications-table">
            <thead>
              <tr>
                <th>Applied</th>
                <th>Company</th>
                <th>Position</th>
                <th>Application Deadline</th>
                <th>Status</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={`${application.company}-${application.position}`}>
                  <td data-label="Applied">{application.applied || 'Not yet'}</td>
                  <td data-label="Company">{application.company}</td>
                  <td data-label="Position">{application.position}</td>
                  <td data-label="Application Deadline">{application.deadline || '-'}</td>
                  <td data-label="Status">
                    <span className={`status status-${statusClass[application.status] || 'to-apply'}`}>
                      {application.status}
                    </span>
                  </td>
                  <td data-label="Link">
                    {application.link ? (
                      <a className="table-link" href={application.link} target="_blank" rel="noreferrer">
                        View posting
                      </a>
                    ) : (
                      <span className="muted">No link</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!applications.length && !isLoading ? (
            <div className="applications-empty">No applications found.</div>
          ) : null}
        </div>
      </section>
    </div>
  )
}

export default Applications
