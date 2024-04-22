// Downloads a file from Supabase bucket
const downloadFile = async (supabase, bucket, filepath) => {
    const { file } = await supabase
    .storage
    .from(bucket)
    .getPublicUrl(filepath, {
        download: true,
    })
    return file
}

export default downloadFile