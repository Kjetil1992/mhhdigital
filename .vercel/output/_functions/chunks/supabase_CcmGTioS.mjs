import { createClient } from "@supabase/supabase-js";
//#region src/lib/supabase.ts
function getSupabase() {
	return createClient("", "");
}
//#endregion
export { getSupabase as t };
