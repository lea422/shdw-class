import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase 환경변수 누락');
  throw new Error('supabaseUrl is required.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);