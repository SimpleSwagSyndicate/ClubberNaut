// Signs up a new user with the Supabase API
import LoggedIn from './LoggedIn.js'
import changePage from './changePage.js'
import signUpFieldsCorrect from './signUpFieldsCorrect.js'
import authCreate from './authCreate.js'
import checkIfUserExists from './checkIfUserExists.js'
import uploadFile from './uploadFile.js'

const signUp = async (supabase) => {
    const email = document.getElementById('sign-up-email').value
    const username = document.getElementById('sign-up-username').value
    const password = document.getElementById('sign-up-password').value
    const confirmPassword = document.getElementById('sign-up-confirm-password').value
    const file = document.getElementById('file').value
    const signUpAlert = document.getElementById('sign-up-alert')
    const signUpPage = document.getElementById('sign-up')
    const signUpSuccessfulPage = document.getElementById('Sign Up Successful')
    const avatar = document.getElementById('avatar')
    if (await signUpFieldsCorrect(email, username, password, confirmPassword, file, signUpAlert) === false) return
    await authCreate(supabase, email, username, password, file, signUpAlert)
    if (await checkIfUserExists(supabase.auth.getUser(), signUpAlert) === true) return
    await uploadFile(supabase, 'user_thumbnails', user.id)
    changePage('sign-up-successful')
    avatar.style.display = 'block'
    avatar.src = user.avatar
    avatar.alt = user.username
    avatar.style.display = 'block'
    signUpAlert.innerHTML = 'Sign up successful.'
    new LoggedIn(user)
}

export default signUp