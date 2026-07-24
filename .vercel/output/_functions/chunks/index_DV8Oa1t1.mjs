import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CpPJQbno.mjs";
import { t as getSupabase } from "./supabase_CcmGTioS.mjs";
//#region src/pages/admin/prosjekter/index.astro
var prosjekter_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const { data: projects } = await getSupabase().from("projects").select("*, customers(name)").order("created_at", { ascending: false });
	const statusLabel = {
		aktiv: "Aktiv",
		fullfort: "Fullført",
		pause: "Pause"
	};
	const statusColor = {
		aktiv: "text-green-400",
		fullfort: "text-gray-500",
		pause: "text-yellow-400"
	};
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Prosjekter" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex items-center justify-between mb-8"><h1 class="text-2xl font-bold">Prosjekter</h1><a href="/admin/prosjekter/ny" class="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">+ Nytt prosjekt</a></div><div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">${!projects?.length ? renderTemplate`<p class="text-gray-500 text-center py-16">Ingen prosjekter ennå.</p>` : renderTemplate`<table class="w-full text-sm"><thead class="border-b border-gray-800"><tr><th class="text-left px-6 py-3 text-gray-400 font-medium">Prosjekt</th><th class="text-left px-6 py-3 text-gray-400 font-medium">Kunde</th><th class="text-left px-6 py-3 text-gray-400 font-medium">Status</th></tr></thead><tbody>${projects.map((p) => renderTemplate`<tr class="border-b border-gray-800 last:border-0 hover:bg-gray-800/50"><td class="px-6 py-4 font-medium">${p.name}</td><td class="px-6 py-4 text-gray-400">${p.customers?.name ?? "—"}</td><td${addAttribute(`px-6 py-4 font-medium ${statusColor[p.status] ?? "text-gray-400"}`, "class")}>${statusLabel[p.status] ?? p.status}</td></tr>`)}</tbody></table>`}</div>` })}`;
}, "/Users/kjetil/mhhdigital/src/pages/admin/prosjekter/index.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/admin/prosjekter/index.astro";
var $$url = "/admin/prosjekter";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/prosjekter/index@_@astro
var page = () => prosjekter_exports;
//#endregion
export { page };
