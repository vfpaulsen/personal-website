import { createAuthCookie, isPasswordValid } from './_jobTracker.js'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : request.body || {}
  const { password } = body

  if (!isPasswordValid(password)) {
    return response.status(401).json({ error: 'Invalid password' })
  }

  response.setHeader('Set-Cookie', createAuthCookie())
  return response.status(200).json({ ok: true })
}
