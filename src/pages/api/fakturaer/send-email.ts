import type { APIRoute } from 'astro';
import { getSupabase } from '../../../lib/supabase';
import { generateKID } from '../../../lib/kid';
import { Resend } from 'resend';

const KONTONUMMER = '4214 06 74421';

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  const invoiceId = data.get('invoice_id') as string;

  const sb = getSupabase();
  const { data: inv } = await sb
    .from('invoices')
    .select('*, customers(*), invoice_lines(*)')
    .eq('id', invoiceId)
    .single();

  if (!inv || !inv.customers?.email) {
    return redirect(`/admin/fakturaer/${invoiceId}?error=no-email`);
  }

  const total = (inv.invoice_lines ?? []).reduce((s: number, l: any) => s + l.unit_price * l.quantity, 0);
  const mvaRate = (inv.mva_rate ?? 0) / 100;
  const mva = total * mvaRate;
  const kid = generateKID(inv.invoice_number);

  const linesHtml = (inv.invoice_lines ?? []).map((l: any) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${l.description}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;text-align:right">${l.quantity}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;text-align:right">${l.unit_price.toLocaleString('nb-NO')} kr</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;text-align:right">${(l.unit_price * l.quantity).toLocaleString('nb-NO')} kr</td>
    </tr>`).join('');

  const html = `
<!DOCTYPE html>
<html lang="no">
<head><meta charset="UTF-8" /></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1d1d1f;max-width:600px;margin:0 auto;padding:40px 20px">
  <div style="margin-bottom:32px">
    <span style="font-size:1.4rem;font-weight:700">MHH<span style="color:#0891b2">Digital</span></span>
  </div>
  <h1 style="font-size:1.5rem;margin-bottom:4px">Faktura ${inv.invoice_number}</h1>
  ${inv.due_date ? `<p style="color:#6b7280;margin:0 0 24px">Forfallsdato: ${new Date(inv.due_date).toLocaleDateString('nb-NO')}</p>` : ''}
  <p style="margin-bottom:8px">Hei ${inv.customers.name},</p>
  <p style="color:#4b5563;margin-bottom:32px">Vedlagt finner du faktura fra MHH Digital.</p>

  <table style="width:100%;border-collapse:collapse;font-size:0.9rem;margin-bottom:24px">
    <thead>
      <tr style="border-bottom:2px solid #e5e7eb">
        <th style="text-align:left;padding:8px 0;color:#6b7280;font-weight:500">Beskrivelse</th>
        <th style="text-align:right;padding:8px 0;color:#6b7280;font-weight:500">Ant.</th>
        <th style="text-align:right;padding:8px 0;color:#6b7280;font-weight:500">Pris</th>
        <th style="text-align:right;padding:8px 0;color:#6b7280;font-weight:500">Sum</th>
      </tr>
    </thead>
    <tbody>${linesHtml}</tbody>
  </table>

  <div style="text-align:right;font-size:0.9rem;margin-bottom:32px">
    <div style="display:flex;justify-content:flex-end;gap:48px;padding:4px 0"><span style="color:#6b7280">Netto</span><span>${total.toLocaleString('nb-NO')} kr</span></div>
    ${mva > 0 ? `<div style="display:flex;justify-content:flex-end;gap:48px;padding:4px 0"><span style="color:#6b7280">MVA (${inv.mva_rate}%)</span><span>${mva.toLocaleString('nb-NO')} kr</span></div>` : ''}
    <div style="display:flex;justify-content:flex-end;gap:48px;padding:12px 0;border-top:2px solid #e5e7eb;font-weight:700;font-size:1rem"><span>Totalt å betale</span><span style="color:#0891b2">${(total + mva).toLocaleString('nb-NO')} kr</span></div>
  </div>

  <div style="background:#f9fafb;border-radius:12px;padding:20px;font-size:0.9rem">
    <p style="font-weight:600;margin:0 0 12px">Betalingsinformasjon</p>
    <p style="margin:4px 0;color:#4b5563">Kontonummer: <strong style="font-family:monospace">${KONTONUMMER}</strong></p>
    <p style="margin:4px 0;color:#4b5563">KID: <strong style="font-family:monospace">${kid}</strong></p>
    ${inv.due_date ? `<p style="margin:4px 0;color:#4b5563">Forfallsdato: <strong>${new Date(inv.due_date).toLocaleDateString('nb-NO')}</strong></p>` : ''}
  </div>

  <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0" />
  <p style="color:#9ca3af;font-size:0.8rem;text-align:center">MHH Digital · hei@mhhdigital.no · www.mhhdigital.no</p>
</body>
</html>`;

  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: 'MHH Digital <faktura@mhhdigital.no>',
    to: inv.customers.email,
    subject: `Faktura ${inv.invoice_number} fra MHH Digital`,
    html,
  });

  if (error) {
    return redirect(`/admin/fakturaer/${invoiceId}?error=send-failed`);
  }

  await sb.from('invoices').update({ status: 'sendt' }).eq('id', invoiceId);
  return redirect(`/admin/fakturaer/${invoiceId}?sent=1`);
};
