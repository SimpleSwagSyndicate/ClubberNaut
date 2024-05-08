const { createClient } = require('@supabase/supabase-js');
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
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
