import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CpPJQbno.mjs";
import { t as getSupabase } from "./supabase_CcmGTioS.mjs";
//#region src/pages/admin/fakturaer/index.astro
var fakturaer_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const { data: invoices } = await getSupabase().from("invoices").select("*, customers(name), invoice_lines(unit_price, quantity)").order("created_at", { ascending: false });
	const statusLabel = {
		kladd: "Kladd",
		sendt: "Sendt",
		betalt: "Betalt"
	};
	const statusColor = {
		kladd: "text-gray-400 bg-gray-800",
		sendt: "text-yellow-400 bg-yellow-950",
		betalt: "text-green-400 bg-green-950"
	};
	function total(lines) {
		return (lines ?? []).reduce((s, l) => s + l.unit_price * l.quantity, 0);
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Fakturaer" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex items-center justify-between mb-8"><h1 class="text-2xl font-bold">Fakturaer</h1><a href="/admin/fakturaer/ny" class="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">+ Ny faktura</a></div><div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">${!invoices?.length ? renderTemplate`<p class="text-gray-500 text-center py-16">Ingen fakturaer ennå.</p>` : renderTemplate`<table class="w-full text-sm"><thead class="border-b border-gray-800"><tr><th class="text-left px-6 py-3 text-gray-400 font-medium">Faktura #</th><th class="text-left px-6 py-3 text-gray-400 font-medium">Kunde</th><th class="text-left px-6 py-3 text-gray-400 font-medium">Forfallsdato</th><th class="text-right px-6 py-3 text-gray-400 font-medium">Beløp</th><th class="text-left px-6 py-3 text-gray-400 font-medium">Status</th><th class="px-6 py-3"></th></tr></thead><tbody>${invoices.map((inv) => renderTemplate`<tr class="border-b border-gray-800 last:border-0 hover:bg-gray-800/50"><td class="px-6 py-4 font-mono font-medium">${inv.invoice_number}</td><td class="px-6 py-4">${inv.customers?.name ?? "—"}</td><td class="px-6 py-4 text-gray-400">${inv.due_date ? new Date(inv.due_date).toLocaleDateString("nb-NO") : "—"}</td><td class="px-6 py-4 text-right font-medium">${total(inv.invoice_lines).toLocaleString("nb-NO")} kr</td><td class="px-6 py-4"><span${addAttribute(`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor[inv.status]}`, "class")}>${statusLabel[inv.status]}</span></td><td class="px-6 py-4 text-right"><a${addAttribute(`/admin/fakturaer/${inv.id}`, "href")} class="text-cyan-400 hover:text-cyan-300 transition-colors">Åpne</a></td></tr>`)}</tbody></table>`}</div>` })}`;
}, "/Users/kjetil/mhhdigital/src/pages/admin/fakturaer/index.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/admin/fakturaer/index.astro";
var $$url = "/admin/fakturaer";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/fakturaer/index@_@astro
var page = () => fakturaer_exports;
//#endregion
export { page };
