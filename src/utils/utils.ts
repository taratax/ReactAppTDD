import { loginFieldsType } from "../constans/formFields";

export const handleSubmitSignUp = function (signupState: loginFieldsType) {
  console.log("GK handleSubmitSignUp called: ", signupState);
};

export const handleSubmitLogin = function(loginState: loginFieldsType) {
    console.log("GK handleSubmitLogin called: ", loginState);
    authenticateUser(loginState)
}

const authenticateUser = (theCredentials: loginFieldsType) => {
    console.log("GK authenticateUser is running", theCredentials);
  };

// test values used as input 
export const inputPassword = 'duperele'
export const inputEmail  = "taratax@gmail.com"