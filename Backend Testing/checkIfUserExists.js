// Checks if a user already exists
const checkIfUserExists = (createdUser, signUpAlert) => {
    // Currently the response of signUp returns a fake user object instead of an error.
    // For now we check the identities object which would be empty if a user already exits.
    const emailIsTaken = createdUser.user.identities?.length === 0
    // Example of setting an error message.
    if (emailIsTaken) {
        signUpAlert.innerHTML = 'Email is already taken.'
        return true
    }
    return false
}

export default checkIfUserExists