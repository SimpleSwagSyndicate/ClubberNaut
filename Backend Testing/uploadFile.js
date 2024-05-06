// Uploads a file to Supabase bucket
const uploadFile = async (supabase, file, bucket, filepath) => {
    console.log(supabase, file, bucket, filepath)
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