// Checks if all sign up fields are filled out correctly
const signUpFieldsCorrect = (email, username, password, confirmPassword, file, signUpAlert) => {
    if (email === undefined || username === undefined || password === undefined || confirmPassword === undefined || file === undefined){
        signUpAlert.innerHTML = 'Please fill out all fields.'
        return false
    }
    if (password !== confirmPassword) {
        signUpAlert.innerHTML = 'Passwords do not match.'
        return false
    }
    if (password.length < 8) {
        signUpAlert.innerHTML = 'Password must be at least 8 characters long.'
        return false
    }
    return true
}

export default signUpFieldsCorrect