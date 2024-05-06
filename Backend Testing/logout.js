import changePage from './changePage.js'

const logout = (supabase) => {
    supabase.auth.signOut()
    document.getElementById('avatar').style.display = 'none'
    document.getElementById('tab_log_in').innerHTML = "Sign In"
    changePage('log_out_successful')
}

export default logout