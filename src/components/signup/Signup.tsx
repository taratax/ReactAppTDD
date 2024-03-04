import { FormAction } from "../formaction/FormAction";
import { Input } from "../input/Input";
import { signupFields, loginFieldsType } from "../../constans/formFields";
import { useState } from "react";
import { handleSubmitSignUp, validateFormType } from "../../utils/utils";
import { ErrorDialog } from "../dialogs/errors/ErrorDialog";
import { portalNameDialogs } from "../../constans/formFields";

export const Signup = function () {
  const fieldsState: loginFieldsType = {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  };

  const [signupState, setSignupState] = useState(fieldsState);
  const [incorrectForm, setIncorrectForm] = useState({
    result: false,
    error: null,
  } as validateFormType);

  const fields = signupFields;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupState({ ...signupState, [event.target.id]: event.target.value });
    return null;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validatorObject = handleSubmitSignUp({ ...signupState });
    if (validatorObject.error === null) {
      createAccount();
      return true;
    }

    setIncorrectForm((prev) => ({
      ...prev,
      result: validatorObject.result,
      error: validatorObject.error,
    }));
    return false;
  };

  const createAccount = () => {};

  const mapper = function (field: loginFieldsType) {
    const indexer: keyof loginFieldsType = field.id as keyof loginFieldsType; // not very good - type assertion !...

    return (
      <Input
        key={field.id}
        handleChange={handleChange}
        value={signupState[indexer] as string}
        labelText={field.labelText}
        labelFor={field.labelFor}
        id={field.id}
        name={field.name}
        type={field.type}
        isRequired={field.isRequired}
        placeholder={field.placeholder}
        customClass="dark:text-white"
      />
    );
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="">
        {fields.map(mapper)}
        <FormAction handlesubmit={handleSubmit} text="Sign up" />
      </div>

      {incorrectForm.error ? (
        <ErrorDialog
          onClose={() => {
            setIncorrectForm((prev) => ({
              ...prev,
              result: false,
              error: null,
            }));
          }}
          portalName={portalNameDialogs}
          errorTextMsg={incorrectForm.error}
        />
      ) : null}
    </div>
  );
};
