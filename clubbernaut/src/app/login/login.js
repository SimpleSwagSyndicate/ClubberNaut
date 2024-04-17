const { createClient } = require("@supabase/supabase-js");
const supabaseURL = "***REMOVED***";
const supabaseKEY =
  "***REMOVED***";
const supabase = createClient(supabaseURL, supabaseKEY);

const logIn = async (user_email, user_password) => {
  console.log("login called!");

  const { data: userData, error: userError } = await supabase
    .from("User Profile")
    .select("email, password")
    .eq("email", user_email)
    .single();

  console.log(userData);
  console.log(userError);
  if (userError) {
    console.log("a");
    return { status: "Error", msg: `${userError.message}` };
  }

  if (!userData) {
    console.log("b");
    return { status: "Error", msg: "User not found" };
  }
  if (userData.password !== user_password) {
    console.log("c");
    return { status: "Error", msg: "Incorrect password" };
  }
  console.log("d");
  return { status: "Success", msg: "Logged in successfully" };
};
export default logIn;
