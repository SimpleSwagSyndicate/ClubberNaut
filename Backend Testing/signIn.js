import changePage from './changePage.js'

const signIn = async (supabase) => {
    // const email = document.getElementById('sign-in-email').value
    // const password = document.getElementById('sign-in-password').value
    const signInAlert = document.getElementById('sign-in-alert')
    // const signInSuccessfulPage = document.getElementById('Sign In Successful')
    // const { data, error } = await supabase.auth.signInWithPass({
    //     email: email,
    //     password: password
    // })
    // if (error) {
    //     signInAlert.innerHTML = error.message
    //     console.log(error.message)
    //     return null
    // }
    // const { data: { user } } = await supabase.auth.getUser()
    signInAlert.innerHTML = 'Sign in successful.'
    changePage('sign-in-successful')
    new LoggedIn(user)
}

export default signIn