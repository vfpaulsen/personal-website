import { createHash, timingSafeEqual } from 'node:crypto'

const authCookieName = 'job_tracker_auth'

function getAuthSecret() {
  return process.env.JOB_TRACKER_PASSWORD || ''
}

export function getAuthToken() {
  const secret = getAuthSecret()

  if (!secret) {
    return ''
  }

  return createHash('sha256').update(`job-tracker:${secret}`).digest('hex')
}

export function isPasswordValid(password) {
  const secret = getAuthSecret()

  if (!secret || !password) {
    return false
  }

  const expected = Buffer.from(secret)
  const received = Buffer.from(password)

  if (expected.length !== received.length) {
    return false
  }

  return timingSafeEqual(expected, received)
}

export function isAuthorized(request) {
  const token = getAuthToken()
  const cookieToken = parseCookies(request.headers.cookie || '')[authCookieName]

  if (!token || !cookieToken) {
    return false
  }

  const expected = Buffer.from(token)
  const received = Buffer.from(cookieToken)

  if (expected.length !== received.length) {
    return false
  }

  return timingSafeEqual(expected, received)
}

export function createAuthCookie() {
  const token = getAuthToken()
  const isProduction = process.env.VERCEL_ENV === 'production'
  const secure = isProduction ? '; Secure' : ''

  return `${authCookieName}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=604800${secure}`
}

export function createLogoutCookie() {
  return `${authCookieName}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`
}

function parseCookies(cookieHeader) {
  return cookieHeader.split(';').reduce((cookies, cookie) => {
    const [key, ...valueParts] = cookie.trim().split('=')

    if (key) {
      cookies[key] = valueParts.join('=')
    }

    return cookies
  }, {})
}

export function parseCsv(text) {
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

export function normalizeApplications(csvText) {
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
