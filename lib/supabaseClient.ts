import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://[O_TEU_PROJECT_URL].supabase.co'
const supabaseKey = '[A_TUA_PUBLIC_ANON_KEY]'
export const supabase = createClient(supabaseUrl, supabaseKey)
