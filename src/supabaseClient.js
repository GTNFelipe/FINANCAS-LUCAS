import { createClient } from '@supabase/supabase-js'

// Variáveis de ambiente fornecidas pelo Vite
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || ''

// Verifica se as credenciais do Supabase foram preenchidas e não são placeholders
export const isSupabaseConfigured = !!(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'SUA_SUPABASE_URL_AQUI' &&
  supabaseAnonKey !== 'SUA_SUPABASE_ANON_KEY_AQUI'
)

// Inicializa o cliente se configurado, caso contrário exporta null
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
