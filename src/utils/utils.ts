import { LoginFieldsType } from "../constans/formFields";
export type validateFormType = {
  result: boolean;
  error: string | null;
};
export const signupErrMsg = {
  EMAIL_MISS_ERROR: "Brakuje adresu email",
  EMAIL_BAD_ERROR: "Adres email jest niepoprawny",
  CONFIRM_PASS_ERROR: "Podane hasła nie są takie same",
  MISSING_PASSWD_ERROR: "Brakuje hasła",
  MISSING_USERNAME_ERROR: "Brak nazwy uzytkownika",
};

export const ERR_CONTAINER_TEST_ID = "error-element";
export const GENERAL_ERROR_TXT = "Błąd";

export const handleSubmitSignUp = (signupState: LoginFieldsType) => {
  // Check for missing username
  if (!signupState.username?.trim()) {
    return { result: false, error: signupErrMsg.MISSING_USERNAME_ERROR };
  }

  // Check for missing email address
  if (!signupState["email-address"]?.trim()) {
    return { result: false, error: signupErrMsg.EMAIL_MISS_ERROR };
  }

  // Check for missing password or confirm password
  if (
    !signupState.password?.trim() ||
    !signupState["confirm-password"]?.trim()
  ) {
    return { result: false, error: signupErrMsg.MISSING_PASSWD_ERROR };
  }

  // Check if passwords match
  if (signupState.password !== signupState["confirm-password"]) {
    return { result: false, error: signupErrMsg.CONFIRM_PASS_ERROR };
  }

  // Validate email format
  if (!emailValidation(signupState["email-address"])) {
    return { result: false, error: signupErrMsg.EMAIL_BAD_ERROR };
  }

  // If all checks pass
  return { result: true, error: null };
};

export const handleSubmitLogin = function (loginState: LoginFieldsType) {
  authenticateUser(loginState);
};

const authenticateUser = (theCredentials: LoginFieldsType) => {
  return theCredentials;
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
export const badEmail = "taratax#gmail.com";
