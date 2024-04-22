// Signs up a new user with the Supabase API 
import signUpFieldsCorrect from './signUpFieldsCorrect.js'
import authCreate from './authCreate.js'
import checkIfUserExists from './checkIfUserExists.js'
import uploadFile from './uploadFile.js'
import LoggedIn from './LoggedIn.js'

const signUp = async (supabase) => {
    const email = document.getElementById('sign-up-email').value
    const username = document.getElementById('sign-up-username').value
    const password = document.getElementById('sign-up-password').value
    const confirmPassword = document.getElementById('sign-up-confirmPassword').value
    const file = document.getElementById('file').value
    const signUpAlert = document.getElementById('sign-up-alert')
    const signUpPage = document.getElementById('sign-up')
    const signUpSuccessfulPage = document.getElementById('Sign Up Successful')
    const avatar = document.getElementById('avatar')
    console.log(email, username, password, confirmPassword, file, signUpPage, signUpSuccessfulPage, avatar)
    if (await signUpFieldsCorrect(email, username, password, confirmPassword, file, signUpAlert) === false) return
    console.log('Sign up fields are correct.')
    const user = await authCreate(supabase, email, username, password, file, signUpAlert)
    console.log('Created user: ', user)
    if (await checkIfUserExists(user, signUpAlert) === true) return
    console.log('Checked if user exists.')
    const loggedIn = new LoggedIn()
    loggedIn.setLoggedIn(true)
    await uploadFile(supabase, 'user_thumbnails', user.id)
    console.log('Uploaded file.')
    signUpPage.style.display = 'none'
    signUpSuccessfulPage.style.display = 'block'
    avatar.src = 'block'
    avatar.style.display = 'block'
    console.log('Sign up successful.')
}

export default signUp