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
}

export default authCreate