const { createClient } = require('@supabase/supabase-js');
const uuid = require('uuid');
const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
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

  if (error_exist) {
    return { status: 'Error', msg: `${error_exist}` };
  }
  if (exist.length !== 0) {
    return { status: 'Error', msg: 'Email already exist' };
  }

  const { data_insert, error_insert } = await supabase.from('User Profile V1a').insert({
    userid: parseInt(uuid.v4()),
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
