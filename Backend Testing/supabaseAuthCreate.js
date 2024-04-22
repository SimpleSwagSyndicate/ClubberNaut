const supabaseAuthCreate = async (supabase, email, username, password, signUpAlert) => {
    console.log(email, password)
    const { createdUser, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                username: username,
                subscriptions: []
            }
        }
    })
    if (error) {
        signUpAlert.innerHTML = error.message
        return null
    }
    return createdUser
}

export default supabaseAuthCreate