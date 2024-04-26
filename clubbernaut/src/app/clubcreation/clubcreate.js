const {createClient} = require('@supabase/supabase-js')
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co'
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
const supabase = createClient(supabaseURL,supabaseKEY)
const uuid = require("uuid")

const MakeClub = async (club_name, club_tags, club_description) => {
    const {data:exist, error_exist} = await supabase
    .from('Club Profile')
    .select('*')
    .eq("name",club_name)

    if (error_exist){
        return {"status":"Error","msg":`${error_exist}`}
    }

    if (exist.length !== 0){
        return {"status":"Error","msg":`Club already exist`}
    }

    const {data_insert, error_insert} = await supabase
    .from('Club Profile')
    .insert({
        clubid : parseInt(uuid.v4()),
        name : club_name,
        tags : club_tags,
        description : club_description
    })

    if (error_insert) {
        return {"status":"Error","msg":`${error_insert}`}
    }
    
    else{
        return {"status":"Success", "msg":"Club has been created successfully"}
    }
}

export default MakeClub