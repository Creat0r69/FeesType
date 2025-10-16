import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// ⚠️ Replace these two lines with your actual Supabase project credentials:
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'your-public-anon-key';

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);
