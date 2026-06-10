import { useEffect, useState } from 'react'

const refreshIntervalMs = 60_000

const statusClass = {
  'To apply': 'to-apply',
  Applied: 'applied',
  Interview: 'interview',
  Offer: 'offer',
  Hired: 'hired',
  Rejected: 'rejected',
}

function Applications() {
  const [applications, setApplications] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    loadApplications({ signal: controller.signal, showLoading: true })
    const intervalId = window.setInterval(() => {
      if (isAuthorized) {
        loadApplications({ signal: controller.signal })
      }
    }, refreshIntervalMs)

    return () => {
      controller.abort()
      window.clearInterval(intervalId)
    }
  }, [isAuthorized])

  async function loadApplications({ signal, showLoading = false } = {}) {
    if (showLoading) {
      setIsLoading(true)
    }

    try {
      const response = await fetch('/api/applications', { signal })

      if (response.status === 401) {
        setIsAuthorized(false)
        setApplications([])
        setError('')
        return
      }

      if (!response.ok) {
        throw new Error('Could not load Google Sheet data.')
      }

      const data = await response.json()
      setApplications(data.applications || [])
      setIsAuthorized(true)
      setError('')
      setLastUpdated(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(new Date(data.updatedAt || Date.now())),
      )
    } catch (loadError) {
      if (loadError.name !== 'AbortError') {
        setError('Could not load Google Sheet data.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogin(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        throw new Error('Invalid password.')
      }

      setPassword('')
      setIsAuthorized(true)
      await loadApplications({ showLoading: true })
    } catch {
      setError('Invalid password.')
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST' })
    setIsAuthorized(false)
    setApplications([])
    setLastUpdated('')
  }

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
        {!isAuthorized && !isLoading ? (
          <form className="tracker-login" onSubmit={handleLogin}>
            <div>
              <p className="eyebrow">Protected area</p>
              <h2>Enter password</h2>
              <p className="muted">The job tracker is private and requires a password.</p>
            </div>
            <label>
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            {error ? <p className="applications-error">{error}</p> : null}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Checking...' : 'Unlock tracker'}
            </button>
          </form>
        ) : (
          <>
            <div className="applications-toolbar">
              <p>
                Connected to Google Sheets
                {lastUpdated ? <span className="last-updated">Last updated {lastUpdated}</span> : null}
              </p>
              <div className="applications-actions">
                {isLoading ? <span>Loading applications...</span> : null}
                {error ? <span className="applications-error">{error}</span> : null}
                <button type="button" onClick={handleLogout}>
                  Lock
                </button>
              </div>
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
          </>
        )}
      </section>
    </div>
  )
}

export default Applications
