const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

export const retrieve_followed_clubs = async (user_id: number) => {
  const { data: clubs, error } = await supabase
    .from('User Profile V1a')
    .select('clubs')
    .eq('userid', user_id);

  const user_clubs = clubs[0].clubs;

  return user_clubs;
};
