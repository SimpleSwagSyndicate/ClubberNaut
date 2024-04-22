// Signs up a new user with the Supabase API 
import signUpFieldsCorrect from './signUpFieldsCorrect.js'
import supabaseAuthCreate from './supabaseAuthCreate.js'
import checkIfUserExists from './checkIfUserExists.js'
import uploadFile from './uploadFile.js'
import LoggedIn from './LoggedIn.js'

const signUpNewUser = async (supabase) => {
    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const file = document.getElementById('file').value
    const signUpAlert = document.getElementById('Sign Up Alert')
    const signUpPage = document.getElementById('Sign Up')
    const signUpSuccessfulPage = document.getElementById('Sign Up Successful')
    const avatar = document.getElementById('avatar')
    console.log(email, username, password, confirmPassword, file, signUpPage, signUpSuccessfulPage, avatar)
    if (await signUpFieldsCorrect(email, username, password, confirmPassword, file, signUpAlert) === false) return
    console.log('Sign up fields are correct.')
    const createdUser = await supabaseAuthCreate(supabase, email, username, password, file, signUpAlert)
    console.log('Created user: ', createdUser)
    if (await checkIfUserExists(createdUser, signUpAlert) === true) return
    console.log('Checked if user exists.')
    const loggedIn = new LoggedIn()
    loggedIn.setLoggedIn(true)
    await uploadFile(supabase, 'user_thumbnails', createdUser.user.id)
    console.log('Uploaded file.')
    signUpPage.style.display = 'none'
    signUpSuccessfulPage.style.display = 'block'
    avatar.src = 'block'
    avatar.style.display = 'block'
    console.log('Sign up successful.')
}

export default signUpNewUser