import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CpPJQbno.mjs";
import { t as getSupabase } from "./supabase_CcmGTioS.mjs";
//#region src/pages/admin/fakturaer/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	const sb = getSupabase();
	if (Astro.request.method === "POST") {
		const data = await Astro.request.formData();
		if (data.get("action") === "update_status") await sb.from("invoices").update({ status: data.get("status") }).eq("id", id);
		return Astro.redirect(`/admin/fakturaer/${id}`);
	}
	const { data: inv } = await sb.from("invoices").select("*, customers(*), projects(name), invoice_lines(*)").eq("id", id).single();
	if (!inv) return Astro.redirect("/admin/fakturaer");
	const total = (inv.invoice_lines ?? []).reduce((s, l) => s + l.unit_price * l.quantity, 0);
	const mva = total * .25;
	const statusLabel = {
		kladd: "Kladd",
		sendt: "Sendt",
		betalt: "Betalt"
	};
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": `Faktura ${inv.invoice_number}` }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-2xl"><div class="flex items-center justify-between mb-8"><div><h1 class="text-2xl font-bold">${inv.invoice_number}</h1><p class="text-gray-400 text-sm mt-1">Status: ${statusLabel[inv.status]}</p></div><div class="flex gap-3"><a${addAttribute(`/admin/fakturaer/${id}/print`, "href")} target="_blank" class="border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold px-4 py-2 rounded-xl transition-colors text-sm">🖨 PDF</a><form method="POST" class="flex gap-2"><input type="hidden" name="action" value="update_status"><select name="status" class="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"><option value="kladd"${addAttribute(inv.status === "kladd", "selected")}>Kladd</option><option value="sendt"${addAttribute(inv.status === "sendt", "selected")}>Sendt</option><option value="betalt"${addAttribute(inv.status === "betalt", "selected")}>Betalt</option></select><button type="submit" class="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-4 py-2 rounded-xl transition-colors text-sm">Oppdater</button></form></div></div><!-- Invoice preview --><div class="bg-gray-900 border border-gray-800 rounded-2xl p-8"><div class="flex justify-between mb-8"><div><p class="font-bold text-lg">MHH Digital</p><p class="text-gray-400 text-sm">kjetil@mhhdigital.no</p><p class="text-gray-400 text-sm">www.mhhdigital.no</p></div><div class="text-right"><p class="font-bold text-lg">${inv.invoice_number}</p>${inv.due_date && renderTemplate`<p class="text-gray-400 text-sm">Forfall: ${new Date(inv.due_date).toLocaleDateString("nb-NO")}</p>`}</div></div><div class="mb-8"><p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Faktureres til</p><p class="font-semibold">${inv.customers?.name}</p>${inv.customers?.email && renderTemplate`<p class="text-gray-400 text-sm">${inv.customers.email}</p>`}${inv.customers?.address && renderTemplate`<p class="text-gray-400 text-sm whitespace-pre-line">${inv.customers.address}</p>`}${inv.customers?.org_number && renderTemplate`<p class="text-gray-400 text-sm">Org.nr: ${inv.customers.org_number}</p>`}</div><table class="w-full text-sm mb-8"><thead class="border-b border-gray-700"><tr><th class="text-left py-2 text-gray-400 font-medium">Beskrivelse</th><th class="text-right py-2 text-gray-400 font-medium">Ant.</th><th class="text-right py-2 text-gray-400 font-medium">Pris</th><th class="text-right py-2 text-gray-400 font-medium">Sum</th></tr></thead><tbody>${inv.invoice_lines.map((l) => renderTemplate`<tr class="border-b border-gray-800"><td class="py-3">${l.description}</td><td class="py-3 text-right text-gray-400">${l.quantity}</td><td class="py-3 text-right text-gray-400">${l.unit_price.toLocaleString("nb-NO")} kr</td><td class="py-3 text-right font-medium">${(l.unit_price * l.quantity).toLocaleString("nb-NO")} kr</td></tr>`)}</tbody></table><div class="text-right space-y-1 text-sm"><div class="flex justify-end gap-8"><span class="text-gray-400">Netto</span><span class="w-28 text-right">${total.toLocaleString("nb-NO")} kr</span></div><div class="flex justify-end gap-8"><span class="text-gray-400">MVA (25%)</span><span class="w-28 text-right">${mva.toLocaleString("nb-NO")} kr</span></div><div class="flex justify-end gap-8 font-bold text-base border-t border-gray-700 pt-2 mt-2"><span>Totalt</span><span class="w-28 text-right text-cyan-400">${(total + mva).toLocaleString("nb-NO")} kr</span></div></div></div></div>` })}`;
}, "/Users/kjetil/mhhdigital/src/pages/admin/fakturaer/[id].astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/admin/fakturaer/[id].astro";
var $$url = "/admin/fakturaer/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/fakturaer/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
