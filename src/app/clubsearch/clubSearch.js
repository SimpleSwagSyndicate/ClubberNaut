const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);
const uuid = require('uuid');

export async function clubSearch(search, tags) {
  let { data: filtered, error } = await supabase
    .from('Club Profile')
    .select()
    .contains('tags', tags)
    .ilike('name', '%' + search + '%');
  return filtered;
}
