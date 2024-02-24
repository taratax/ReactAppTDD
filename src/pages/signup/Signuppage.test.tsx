import { render, screen, fireEvent } from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event";
import { SignupPage } from "./SignupPage";
import { MemoryRouter } from "react-router-dom";
import * as utils from "../../utils/utils";

describe("Testing the signup view", () => {
  it.skip("Checking the text Signup to create account", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>
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
      </MemoryRouter>
    );

    const element = screen.getByText(/already have account\?/i);

    expect(element).toBeInTheDocument();
  });

  it("Check if button clicked handler called", async () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>
    );
    screen.logTestingPlaygroundURL();

    const spy = jest.spyOn(utils, "handleSubmitSignUp");
    const [username, email] = screen.getAllByRole("textbox");
    const password = screen.getAllByLabelText(/password/i);

    user.click(username);
    userEvent.type(username, "alamakota");

    user.click(email);
    userEvent.type(email, "alamakota@gmail.com");

    user.click(password[0]);
    userEvent.type(password[0], "haselko");

    user.click(password[1]);
    userEvent.type(password[1], "haselko");

    const theForm = screen.getByRole("form");
    fireEvent.submit(theForm);

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toHaveLength(2);

    // const theInputObject = {
    //   "autoComplete": "email",
    //   "confirm-password": "haselko",
    //   "email-address": "alamakota@gmail.com",
    //   "id": "email-address",
    //   "isRequired": true,
    //   "labelFor": "email-address",
    //   "labelText": "Email address",
    //   "name": "email",
    //   "password": "haselko",
    //   "placeholder": "Email address",
    //   "type": "email",
    //   "username": "alamakota",
    // }

    expect(spy).toHaveBeenCalled();
  });
});
