// Uploads a file to Supabase bucket
import { createClient } from '@supabase/supabase-js';

const uploadFile = async (file, bucket, filename) => {
    const { createClient } = require('@supabase/supabase-js');
    const supabaseURL = process.env.SUPABASE_URL;
    const supabaseKEY = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseURL, supabaseKEY);
    const filepath = 'https://hwifvhkdngdxtmbvymlx.supabase.co/storage/v1/object/public/'
    const { data, error } = await supabase
    .storage
    .from(bucket)
    .upload(filename + '/thumbnail', file)
    if (error) {
        console.log('Error uploading file: ', error.message)
    } else {
        console.log('File uploaded successfully: ', data)
        return data
    }
}

export default uploadFile