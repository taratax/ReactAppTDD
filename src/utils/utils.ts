import { loginFieldsType } from "../constans/formFields";

export const handleSubmitSignUp = function (signupState: loginFieldsType) {
  if (signupState["email-address"] == undefined) {
    return false;
  }

  return emailValidation(signupState["email-address"]);
};

export const handleSubmitLogin = function (loginState: loginFieldsType) {
  console.log("GK handleSubmitLogin called: ", loginState);
  authenticateUser(loginState);
};

const authenticateUser = (theCredentials: loginFieldsType) => {
  console.log("GK authenticateUser is running", theCredentials);
};

export const emailValidation = (theEmai: string): boolean => {
  const expression: RegExp =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

  if (expression.test(theEmai)) {
    return true;
  }
  return false;
};

// test values used as input
export const inputPassword = "duperele";
export const inputEmail = "taratax@gmail.com";
