// Uploads a file to Supabase bucket
const uploadFile = async (file, bucket, filepath) => {
    import { createClient } from '@supabase/supabase-js';
    const { createClient } = require('@supabase/supabase-js')
    const supabaseURL = process.env.SUPABASE_URL
    const supabaseKEY = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseURL, supabaseKEY)
    const { data, error } = await supabase
    .storage
    .from(bucket)
    .upload(filepath + '/avatar.jpg', file)
    if (error) {
        console.log('Error uploading file: ', error.message)
    } else {
        console.log('File uploaded successfully: ', data)
    }
}

export default uploadFile