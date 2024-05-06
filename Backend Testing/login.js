import changePage from './changePage.js'
import logout from './logout.js'

const signIn = async (supabase) => {
    const email = document.getElementById('log_in_email').value
    const password = document.getElementById('log_in_password').value
    const signInAlert = document.getElementById('log_in_alert')
    const signInSuccessfulPage = document.getElementById('Sign In Successful')
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        signInAlert.innerHTML = error.message
        console.log(error.message)
        return null
    }
    const user = (await supabase.auth.getUser()).data.user
    signInAlert.innerHTML = 'Sign in successful.'
    avatar.src = 'https://hwifvhkdngdxtmbvymlx.supabase.co/storage/v1/object/public/user_avatars/' + user.id + '/avatar.jpg'
    avatar.style.display = 'block'
    document.getElementById('tab_log_in').innerHTML = "Log Out"
    changePage('log_in_successful')
}

export default signIn