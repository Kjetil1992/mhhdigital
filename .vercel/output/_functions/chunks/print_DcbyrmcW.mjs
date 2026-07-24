import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { h as renderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as getSupabase } from "./supabase_CcmGTioS.mjs";
//#region src/pages/admin/fakturaer/[id]/print.astro
var print_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Print,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Print = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Print;
	const { id } = Astro.params;
	const { data: inv } = await getSupabase().from("invoices").select("*, customers(*), invoice_lines(*)").eq("id", id).single();
	if (!inv) return Astro.redirect("/admin/fakturaer");
	const total = (inv.invoice_lines ?? []).reduce((s, l) => s + l.unit_price * l.quantity, 0);
	const mva = total * .25;
	return renderTemplate`<html lang="no" data-astro-cid-4feew3uh><head><meta charset="UTF-8"><title>Faktura ${inv.invoice_number}</title>${renderHead($$result)}</head><body data-astro-cid-4feew3uh><div class="no-print" style="background:#f3f4f6;padding:12px 24px;margin:-60px -60px 40px;display:flex;justify-content:flex-end;" data-astro-cid-4feew3uh><button onclick="window.print()" style="background:#0891b2;color:#fff;border:none;padding:8px 20px;border-radius:8px;font-weight:600;cursor:pointer;" data-astro-cid-4feew3uh>Skriv ut / Lagre som PDF</button></div><div class="header" data-astro-cid-4feew3uh><div data-astro-cid-4feew3uh><div class="logo" data-astro-cid-4feew3uh>MHH<span data-astro-cid-4feew3uh>Digital</span></div><p style="color:#6b7280;font-size:0.85rem;margin-top:4px;" data-astro-cid-4feew3uh>kjetil@mhhdigital.no</p><p style="color:#6b7280;font-size:0.85rem;" data-astro-cid-4feew3uh>www.mhhdigital.no</p></div><div class="meta" data-astro-cid-4feew3uh><h2 data-astro-cid-4feew3uh>FAKTURA</h2><p data-astro-cid-4feew3uh>${inv.invoice_number}</p>${inv.due_date && renderTemplate`<p data-astro-cid-4feew3uh>Forfall: ${new Date(inv.due_date).toLocaleDateString("nb-NO")}</p>`}<p data-astro-cid-4feew3uh>Dato: ${new Date(inv.created_at).toLocaleDateString("nb-NO")}</p></div></div><div class="bill-to" data-astro-cid-4feew3uh><p class="label" data-astro-cid-4feew3uh>Faktureres til</p><strong data-astro-cid-4feew3uh>${inv.customers?.name}</strong>${inv.customers?.email && renderTemplate`<p data-astro-cid-4feew3uh>${inv.customers.email}</p>`}${inv.customers?.address && renderTemplate`<p style="white-space:pre-line" data-astro-cid-4feew3uh>${inv.customers.address}</p>`}${inv.customers?.org_number && renderTemplate`<p data-astro-cid-4feew3uh>Org.nr: ${inv.customers.org_number}</p>`}</div><table data-astro-cid-4feew3uh><thead data-astro-cid-4feew3uh><tr data-astro-cid-4feew3uh><th data-astro-cid-4feew3uh>Beskrivelse</th><th data-astro-cid-4feew3uh>Ant.</th><th data-astro-cid-4feew3uh>Pris</th><th data-astro-cid-4feew3uh>Sum</th></tr></thead><tbody data-astro-cid-4feew3uh>${inv.invoice_lines.map((l) => renderTemplate`<tr data-astro-cid-4feew3uh><td data-astro-cid-4feew3uh>${l.description}</td><td data-astro-cid-4feew3uh>${l.quantity}</td><td data-astro-cid-4feew3uh>${l.unit_price.toLocaleString("nb-NO")} kr</td><td data-astro-cid-4feew3uh>${(l.unit_price * l.quantity).toLocaleString("nb-NO")} kr</td></tr>`)}</tbody></table><div class="totals" data-astro-cid-4feew3uh><div data-astro-cid-4feew3uh><span class="label-r" data-astro-cid-4feew3uh>Netto</span><span data-astro-cid-4feew3uh>${total.toLocaleString("nb-NO")} kr</span></div><div data-astro-cid-4feew3uh><span class="label-r" data-astro-cid-4feew3uh>MVA (25%)</span><span data-astro-cid-4feew3uh>${mva.toLocaleString("nb-NO")} kr</span></div><div class="grand" data-astro-cid-4feew3uh><span data-astro-cid-4feew3uh>Totalt å betale</span><span data-astro-cid-4feew3uh>${(total + mva).toLocaleString("nb-NO")} kr</span></div></div><div class="footer" data-astro-cid-4feew3uh>MHH Digital · kjetil@mhhdigital.no · www.mhhdigital.no</div></body></html>`;
}, "/Users/kjetil/mhhdigital/src/pages/admin/fakturaer/[id]/print.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/admin/fakturaer/[id]/print.astro";
var $$url = "/admin/fakturaer/[id]/print";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/fakturaer/[id]/print@_@astro
var page = () => print_exports;
//#endregion
export { page };
