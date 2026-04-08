import { createClient } from '@supabase/supabase-js';

/** Fallback só para dev sem .env — produção (VPS) deve definir VITE_SUPABASE_ANON_KEY no build. */
const fallbackUrl = 'https://slrpesefjkzoaufvogdj.supabase.co';
const fallbackKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscnBlc2Vmamt6b2F1ZnZvZ2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxOTk5NjAsImV4cCI6MjA3NDc3NTk2MH0._ZFfjr_DKP-0HNXFapth3gPhTSlce6FP2142aP_NhKo';

/** Se VITE_SUPABASE_URL estiver vazio, usa o host atual (planeje e ddplaneje no mesmo Nginx, sem CORS). */
function resolveSupabaseUrl() {
  const fromEnv = import.meta.env.VITE_SUPABASE_URL;
  if (fromEnv && String(fromEnv).trim() !== '') {
    return String(fromEnv).trim();
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return fallbackUrl;
}

export const supabaseUrl = resolveSupabaseUrl();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || fallbackKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
