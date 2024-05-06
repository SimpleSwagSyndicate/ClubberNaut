const authCreate = async (supabase, email, username, password, signUpAlert) => {
    console.log(email, password)
    const { data, error } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        user_metadata: {
            username: username,
            subscriptions: []
        },
        email_confirm: true
    })
    if (error) {
        signUpAlert.innerHTML = error.message
        return null
    }
    const { data2, error2 } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    console.log(await supabase.auth.getUser())
    const user = await supabase.auth.getUser()
    console.log(user)
    return (await supabase.auth.getUser()).data.user
}

export default authCreate