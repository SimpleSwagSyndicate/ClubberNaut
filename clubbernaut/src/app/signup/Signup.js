const {createClient} = require('@supabase/supabase-js')
const supabaseURL = '***REMOVED***'
const supabaseKEY = '***REMOVED***'
const supabase = createClient(supabaseURL,supabaseKEY)
const uuid = require('uuid');
const SignUp = async (user_name, user_password, user_email) => {
    const {exist, error_exist} = await supabase
    .from('User Profile')
    .select('email')
    .eq('email',user_email)
    console.log(exist)
    if (error_exist){
        return {"status":"Error","msg":`${error_exist}`}
    }
    if (exist !== "undefined") {
        return {"status":"Error","msg": "Email already exist"}
    }
    const {data_insert, error_insert} = await supabase
    .from('User Profile')
    .insert({
        name : user_name,
        password : user_password,
        email : user_email,
        clubs : [],
        notification : true,
    })
    if (error_insert) {
        return {"status":"Error","msg":`${error_insert}`}
    }
    else{
        return {"status":"Success", "msg":"You have successfully signed up"}
    }
}

export default SignUp