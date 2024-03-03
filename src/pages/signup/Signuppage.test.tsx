import { render, screen, fireEvent } from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event";
import { SignupPage } from "./SignupPage";
import { MemoryRouter } from "react-router-dom";
import * as utils from "../../utils/utils";

describe.skip("Testing the signup view", () => {
  it.skip("Checking the text Signup to create account", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>,
    );

    const element = screen.getByRole("heading", {
      name: /signup to create /i,
    });

    expect(element).toBeInTheDocument();
  });

  it.skip("Checking Already have account text", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>,
    );

    const element = screen.getByText(/already have account\?/i);

    expect(element).toBeInTheDocument();
  });

  it("Check if button clicked handler called", async () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>,
    );

    const spy = jest.spyOn(utils, "handleSubmitSignUp");
    const [username, email] = screen.getAllByRole("textbox");
    const password = screen.getAllByLabelText(/password/i);

    user.click(email);
    fireEvent.change(email, { target: { value: utils.inputEmail } });

    fireEvent.change(password[0], { target: { value: utils.inputPassword } });
    fireEvent.change(password[1], { target: { value: utils.inputPassword } });

    const theForm = screen.getByRole("form");
    fireEvent.submit(theForm);

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toHaveLength(2);

    const theInputObject = {
      labelText: "Email address",
      labelFor: "email-address",
      id: "email-address",
      name: "email",
      type: "email",
      autoComplete: "email",
      isRequired: true,
      placeholder: "Email address",
      "email-address": utils.inputEmail,
      password: utils.inputPassword,
      "confirm-password": utils.inputPassword,
    };

    screen.logTestingPlaygroundURL();
    expect(spy).toHaveBeenCalledWith(theInputObject);

    const confirmInput = password[1] as HTMLInputElement;
    expect(confirmInput.value).toBe(utils.inputPassword);
  });

  it("The email validation function was called", async () => {
    //arrange
    const localuser = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>,
    );

    const spy = jest.spyOn(utils, "emailValidation");

    const [, email] = screen.getAllByRole("textbox");
    const password = screen.getAllByLabelText(/password/i);

    user.click(email);
    // fireEvent.change(email, { target: { value: utils.inputEmail } });
    await localuser.type(email, `${utils.inputEmail}`);

    fireEvent.change(password[0], { target: { value: utils.inputPassword } });
    fireEvent.change(password[1], { target: { value: utils.inputPassword } });

    const theForm = screen.getByRole("form");
    fireEvent.submit(theForm);

    expect(spy).toHaveBeenCalledWith(utils.inputEmail);
    expect(spy).toHaveReturnedWith(true as boolean);
    // expect(spy).toHaveBeenCalled();
  });
});

describe("Handling email format", () => {
  it("after button press, if email format wrong, display error dialog", async () => {
    const localuser = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>,
    );

    const spy = jest.spyOn(utils, "emailValidation");

    const [, email] = screen.getAllByRole("textbox");
    const password = screen.getAllByLabelText(/password/i);

    user.click(email);

    await localuser.type(email, `${utils.inputEmail}`);

    fireEvent.change(password[0], { target: { value: utils.inputPassword } });
    fireEvent.change(password[1], { target: { value: utils.inputPassword } });

    const theForm = screen.getByRole("form");
    fireEvent.submit(theForm);

    expect(spy).toHaveBeenCalledWith(utils.inputEmail);
    expect(spy).toHaveReturnedWith(true as boolean);
  });
});
