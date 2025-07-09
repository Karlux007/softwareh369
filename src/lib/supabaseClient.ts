import { createClient } from "@supabase/supabase-js";

// 👉 Copia esta URL do Supabase (está visível na tua imagem)
const supabaseUrl = "https://vdyxfenazngxmefechea.supabase.co";

// 👉 Agora clica no botão “Go to API Keys” para obter a anon key
// Depois cola aqui:
const supabaseKey = "eyJhbGciOiJIUzI1NiIs...";  // ← cola aqui a tua chave anon

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
