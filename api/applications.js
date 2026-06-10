import { isAuthorized, normalizeApplications } from './_jobTracker.js'

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!isAuthorized(request)) {
    return response.status(401).json({ error: 'Unauthorized' })
  }

  const sheetUrl = process.env.APPLICATIONS_SHEET_CSV_URL || process.env.VITE_APPLICATIONS_SHEET_CSV_URL

  if (!sheetUrl) {
    return response.status(500).json({ error: 'Google Sheets URL is not configured' })
  }

  const url = new URL(sheetUrl)
  url.searchParams.set('cacheBust', Date.now().toString())

  const sheetResponse = await fetch(url.toString())

  if (!sheetResponse.ok) {
    return response.status(502).json({ error: 'Could not load Google Sheet data' })
  }

  const csvText = await sheetResponse.text()
  const applications = normalizeApplications(csvText)

  return response.status(200).json({
    applications,
    updatedAt: new Date().toISOString(),
  })
}
