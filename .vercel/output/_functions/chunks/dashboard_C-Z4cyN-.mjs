import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CpPJQbno.mjs";
import { t as getSupabase } from "./supabase_CcmGTioS.mjs";
//#region src/pages/admin/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
	const sb = getSupabase();
	const { count: invoiceCount } = await sb.from("invoices").select("*", {
		count: "exact",
		head: true
	});
	const { count: customerCount } = await sb.from("customers").select("*", {
		count: "exact",
		head: true
	});
	const { count: projectCount } = await sb.from("projects").select("*", {
		count: "exact",
		head: true
	});
	const { data: unpaid } = await sb.from("invoices").select("id, invoice_lines(unit_price, quantity)").eq("status", "sendt");
	const outstanding = (unpaid ?? []).reduce((sum, inv) => {
		return sum + (inv.invoice_lines ?? []).reduce((s, l) => s + l.unit_price * l.quantity, 0);
	}, 0);
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Oversikt" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1 class="text-2xl font-bold mb-8">Oversikt</h1><div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10"><div class="bg-gray-900 border border-gray-800 rounded-2xl p-6"><p class="text-gray-400 text-sm mb-1">Fakturaer</p><p class="text-3xl font-bold">${invoiceCount ?? 0}</p></div><div class="bg-gray-900 border border-gray-800 rounded-2xl p-6"><p class="text-gray-400 text-sm mb-1">Utestående</p><p class="text-3xl font-bold text-cyan-400">${outstanding.toLocaleString("nb-NO")} kr</p></div><div class="bg-gray-900 border border-gray-800 rounded-2xl p-6"><p class="text-gray-400 text-sm mb-1">Kunder</p><p class="text-3xl font-bold">${customerCount ?? 0}</p></div><div class="bg-gray-900 border border-gray-800 rounded-2xl p-6"><p class="text-gray-400 text-sm mb-1">Prosjekter</p><p class="text-3xl font-bold">${projectCount ?? 0}</p></div></div><div class="flex gap-4"><a href="/admin/fakturaer/ny" class="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors">+ Ny faktura</a><a href="/admin/kunder/ny" class="border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold px-6 py-3 rounded-xl transition-colors">+ Ny kunde</a></div>` })}`;
}, "/Users/kjetil/mhhdigital/src/pages/admin/dashboard.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/admin/dashboard.astro";
var $$url = "/admin/dashboard";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/dashboard@_@astro
var page = () => dashboard_exports;
//#endregion
export { page };
