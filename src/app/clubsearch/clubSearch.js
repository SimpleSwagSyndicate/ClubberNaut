const { createClient } = require('@supabase/supabase-js');
const supabaseURL = '***REMOVED***';
const supabaseKEY = '***REMOVED***'
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
