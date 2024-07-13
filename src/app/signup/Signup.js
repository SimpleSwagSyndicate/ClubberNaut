const { createClient } = require('@supabase/supabase-js');
const uuid = require('uuid');
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

const SignUp = async (user_name, user_password, user_confirm_password, user_email) => {
  if (user_password !== user_confirm_password) {
    return { status: 'Error', msg: 'Passwords do not match.' };
  }

  if (!user_email.includes('@')) {
    return { status: 'Error', msg: 'Invalid email address.' };
  }

  const { data: exist, error_exist } = await supabase
    .from('User Profile V1a')
    .select('*')
    .eq('email', user_email);
  console.log(exist, error_exist);
  if (error_exist) {
    return { status: 'Error', msg: `${error_exist}` };
  }
  if (exist.length !== 0) {
    return { status: 'Error', msg: 'Email already exist' };
  }
  console.log(user_name, user_password, user_email);
  const { data_insert, error_insert } = await supabase.from('User Profile V1a').insert({
    name: user_name,
    password: user_password,
    email: user_email,
    clubs: [],
    notifications: true,
  });

  if (error_insert) {
    return { status: 'Error', msg: `${error_insert}` };
  } else {
    return { status: 'Success', msg: 'You have successfully signed up' };
  }
};

export default SignUp;
