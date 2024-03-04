import { loginFieldsType } from "../constans/formFields";
export type validateFormType = {
  result: boolean;
  error: string | null;
};

export const EMAIL_MISS_ERROR = "Brakuje adresu email";
export const EMAIL_BAD_ERROR = "Adres email jest niepoprawny";
export const CONFIRM_PASS_ERROR = "Podane hasła nie są takie same";
export const MISSING_PASSWD_ERROR = "Brakuje hasła";
export const MISSING_USERNAME_ERROR = "Brak nazwy uzytkownika";

export const handleSubmitSignUp = function (signupState: loginFieldsType) {
  if (
    signupState["username"] == undefined ||
    signupState["username"].length === 0
  ) {
    return {
      result: false,
      error: MISSING_USERNAME_ERROR,
    };
  }

  if (signupState["email-address"] == undefined) {
    return {
      result: false,
      error: EMAIL_MISS_ERROR,
    };
  }
  if (
    signupState.password === undefined ||
    signupState["confirm-password"] === undefined
  ) {
    return {
      result: false,
      error: MISSING_PASSWD_ERROR,
    };
  }
  if (signupState.password !== signupState["confirm-password"]) {
    return {
      result: false,
      error: CONFIRM_PASS_ERROR,
    };
  }
  if (!emailValidation(signupState["email-address"])) {
    return {
      result: false,
      error: EMAIL_BAD_ERROR,
    };
  }

  return {
    result: true,
    error: null,
  };
};

export const handleSubmitLogin = function (loginState: loginFieldsType) {
  authenticateUser(loginState);
};

const authenticateUser = (theCredentials: loginFieldsType) => {
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
