import { createLogoutCookie } from './_jobTracker.js'

export default function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  response.setHeader('Set-Cookie', createLogoutCookie())
  return response.status(200).json({ ok: true })
}
