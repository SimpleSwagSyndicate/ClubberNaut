const supabaseTableCreate = async (supabase, email, username, password, confirmPassword, file, createdUser, signUpAlert) => {
    const { data, error } = await supabase
    .from('User Profile dw')
    .insert([
        { id: createdUser.id, username: username, email: email }
    ])
    if (error) {
        signUpAlert.innerHTML = error.message
        return
    }
    signUpAlert.innerHTML = 'Sign up successful.'
}

export default supabaseTableCreate