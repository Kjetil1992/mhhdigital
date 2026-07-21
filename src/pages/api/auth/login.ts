import type { APIRoute } from 'astro';
import { verifyPassword, createSessionToken, getSessionCookieOptions, COOKIE_NAME } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const data = await request.formData();
  const password = data.get('password')?.toString() ?? '';

  const valid = await verifyPassword(password);
  if (!valid) {
    return new Response(JSON.stringify({ error: 'Feil passord' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = await createSessionToken();
  const opts = getSessionCookieOptions();
  cookies.set(COOKIE_NAME, token, opts);

  return redirect('/admin/dashboard');
};
