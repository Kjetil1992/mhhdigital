import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CpPJQbno.mjs";
import { t as getSupabase } from "./supabase_CcmGTioS.mjs";
//#region src/pages/admin/prosjekter/ny.astro
var ny_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ny,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Ny = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Ny;
	const sb = getSupabase();
	const { data: customers } = await sb.from("customers").select("id, name").order("name");
	if (Astro.request.method === "POST") {
		const data = await Astro.request.formData();
		await sb.from("projects").insert({
			name: data.get("name"),
			customer_id: data.get("customer_id") || null,
			description: data.get("description") || null,
			status: data.get("status")
		});
		return Astro.redirect("/admin/prosjekter");
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Nytt prosjekt" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-xl"><h1 class="text-2xl font-bold mb-8">Nytt prosjekt</h1><form method="POST" class="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-5"><div><label class="block text-sm font-medium text-gray-300 mb-1.5">Prosjektnavn *</label><input name="name" required class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"></div><div><label class="block text-sm font-medium text-gray-300 mb-1.5">Kunde</label><select name="customer_id" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"><option value="">— Velg kunde —</option>${customers?.map((c) => renderTemplate`<option${addAttribute(c.id, "value")}>${c.name}</option>`)}</select></div><div><label class="block text-sm font-medium text-gray-300 mb-1.5">Beskrivelse</label><textarea name="description" rows="3" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 resize-none"></textarea></div><div><label class="block text-sm font-medium text-gray-300 mb-1.5">Status</label><select name="status" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"><option value="aktiv">Aktiv</option><option value="pause">Pause</option><option value="fullfort">Fullført</option></select></div><div class="flex gap-3 pt-2"><button type="submit" class="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-6 py-2.5 rounded-xl transition-colors">Lagre prosjekt</button><a href="/admin/prosjekter" class="text-gray-400 hover:text-white px-6 py-2.5 transition-colors">Avbryt</a></div></form></div>` })}`;
}, "/Users/kjetil/mhhdigital/src/pages/admin/prosjekter/ny.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/admin/prosjekter/ny.astro";
var $$url = "/admin/prosjekter/ny";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/prosjekter/ny@_@astro
var page = () => ny_exports;
//#endregion
export { page };
