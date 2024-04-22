const authCreate = async (supabase, email, username, password, signUpAlert) => {
    console.log(email, password)
    const { data, error } = await supabase.auth.signUp({
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
    const { data: { user } } = await supabase.auth.getUser()
    return user
}

export default authCreate