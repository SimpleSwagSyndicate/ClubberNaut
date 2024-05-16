const { createClient } = require('@supabase/supabase-js');

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

const logIn = async (user_email, user_password) => {
  console.log('login called!');

  const { data: userData, error: userError } = await supabase
    .from('User Profile V1a')
    .select('email, password')
    .eq('email', user_email);

  // console.log(userData);
  if (userError) {
    return { status: 'Error', msg: `${userError.message}` };
  }

  if (userData.length == 0) {
    return { status: 'Error', msg: 'User not found' };
  }
  let password = userData.at(0).password;

  if (password != user_password) {
    return { status: 'Error', msg: 'Incorrect password' };
  }

  return { status: 'Success', msg: 'Logged in successfully' };
};
export default logIn;
