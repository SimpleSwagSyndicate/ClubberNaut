const forgotPassword = async (supabase, email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) {
        console.log(error.message)
        return null
    }
    console.log(data)

}

export default forgotPassword