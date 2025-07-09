import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xxxx.supabase.co"; // ← substitui
const supabaseKey = "eyJhbGciOi...";             // ← substitui

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
