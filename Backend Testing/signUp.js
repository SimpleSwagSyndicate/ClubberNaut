// Signs up a new user with the Supabase API
import changePage from './changePage.js'
import signUpFieldsCorrect from './signUpFieldsCorrect.js'
import authCreate from './authCreate.js'
import checkIfUserExists from './checkIfUserExists.js'
import uploadFile from './uploadFile.js'

const signUp = async (supabase) => {
    const email = document.getElementById('sign_up_email').value
    const username = document.getElementById('sign_up_username').value
    const password = document.getElementById('sign_up_password').value
    const confirmPassword = document.getElementById('sign_up_confirm_password').value
    const file = document.getElementById('file').files[0]
    const signUpAlert = document.getElementById('sign_up_alert')
    const signUpPage = document.getElementById('sign_up')
    const signUpSuccessfulPage = document.getElementById('Sign Up Successful')
    const avatar = document.getElementById('avatar')
    if (await signUpFieldsCorrect(email, username, password, confirmPassword, file, signUpAlert) === false) return
    const user = await authCreate(supabase, email, username, password, file, signUpAlert)
    if (await checkIfUserExists(user, signUpAlert) === true) return
    console.log(user)
    await uploadFile(supabase, file, 'user_avatars', user.id)
    changePage('sign_up_successful')
    avatar.style.display = 'block'
    const { avatarSrc } = await supabase
        .storage
        .from('user_avatars')
        .getPublicUrl('get')
    console.log(avatarSrc)
    avatar.src = 'https://hwifvhkdngdxtmbvymlx.supabase.co/storage/v1/object/public/user_avatars/' + user.id + '/avatar.jpg'
    avatar.style.display = 'block'
    signUpAlert.innerHTML = 'Sign up successful.'
}

export default signUp