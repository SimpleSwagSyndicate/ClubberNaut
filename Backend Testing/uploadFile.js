// Uploads a file to Supabase bucket
const uploadFile = async (supabase, bucket, filepath) => {
    const { data, error } = await supabase
    .storage
    .from('bucket_name')
    .upload('file_path', file)
    if (error) {
        console.log('Error uploading file: ', error.message)
    } else {
        console.log('File uploaded successfully: ', data)
    }
}

export default uploadFile