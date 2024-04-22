import LoggedIn from "./LoggedIn"

const signIn = async (supabase) => {
    const email = document.getElementById('sign-in-email').value
    const password = document.getElementById('sign-in-password').value
    const signInAlert = document.getElementById('sign-in-alert')
    const { data, error } = await supabase.auth.signIn({
        email: email,
        password: password
    })
    if (error) {
        signInAlert.innerHTML = error.message
        console.log(error.message)
        return null
    }
    const { data: { user } } = await supabase.auth.getUser()
    const loggedIn = new LoggedIn(user)
    signInAlert.innerHTML = 'Sign in successful.'
    return user
}

export default signIn