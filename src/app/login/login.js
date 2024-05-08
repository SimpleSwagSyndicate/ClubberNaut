const { createClient } = require('@supabase/supabase-js');

const supabaseURL = 'https://fricdlpilwnfjdmtvvle.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyaWNkbHBpbHduZmpkbXR2dmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzQ1NzEsImV4cCI6MjAyNDIxMDU3MX0.PWWh9fYaHNEOoEC61p7k4TcdmrYwe-M5EWV5mwBC-Xk'
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
