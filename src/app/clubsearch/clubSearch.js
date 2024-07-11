const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

export async function clubSearch(search, tags) {
  console.log("tags: ", tags);
  let result = {data: [], error: null};
  if (tags.length > 0) {
    result = await supabase
      .from('Club Profile')
      .select()
      .or(tags.map(tag => `tags.cs.{${tag}}`))
      .ilike('name', '%' + search + '%');
  }
  if (tags.length === 0) {
    result = await supabase
      .from('Club Profile')
      .select()
      .ilike('name', '%' + search + '%');
  }
  return result.data;
}
