import {
  render,
  screen,
  // fireEvent,
  getByRole,
  getAllByRole,
  getAllByLabelText,
  // findByText,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { SignupPage } from "./SignupPage";
import { MemoryRouter } from "react-router-dom";
import * as utils from "../../utils/utils";

export class ValidateFormPO {
  private elements: {
    theForm: HTMLElement;
    UsernameInput: HTMLInputElement;
    EmailInput: HTMLInputElement;
    PasswordInput: HTMLInputElement;
    ConfirmPwdInput: HTMLInputElement;
  };

  private elementsByVariousSelectors(container: HTMLElement) {
    return {
      get theForm() {
        return getByRole(container, "form");
      },
      get UsernameInput() {
        return getAllByRole(container, "textbox")[0] as HTMLInputElement;
      },
      get EmailInput() {
        return getAllByRole(container, "textbox")[1] as HTMLInputElement;
      },
      get PasswordInput() {
        return getAllByLabelText(container, /password/i)[0] as HTMLInputElement;
      },
      get ConfirmPwdInput() {
        return getAllByLabelText(container, /password/i)[1] as HTMLInputElement;
      },
    };
  }
  protected constructor(protected container: HTMLElement) {
    this.elements = this.elementsByVariousSelectors(container);
  }

  static render() {
    const { container } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>,
    );
    return new ValidateFormPO(container as HTMLElement);
  }

  async typedUserNamePasswordsAndBadEmailFormat() {
    const localUser = userEvent.setup();

    // Assuming utils.badEmail and utils.inputPassword are predefined constants
    await localUser.type(this.elements.UsernameInput, "testUser"); // Simulate typing a username
    await localUser.type(this.elements.EmailInput, utils.badEmail); // Simulate typing a bad email
    await localUser.type(this.elements.PasswordInput, utils.inputPassword);
    await localUser.type(this.elements.ConfirmPwdInput, utils.inputPassword);
    screen.logTestingPlaygroundURL();

    // await localUser.click(screen.getByRole("button", { name: /submit/i })); // Assuming your form has a submit button with an accessible name
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));
  }

  async typedUserNameOnly() {
    const localUser = userEvent.setup();

    // Assuming utils.badEmail and utils.inputPassword are predefined constants
    await localUser.type(this.elements.UsernameInput, "testUser"); // Simulate typing a username

    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));
  }

  async typedEmailAddressOnly() {
    const localUser = userEvent.setup();

    // Assuming utils.badEmail and utils.inputPassword are predefined constants
    await localUser.type(this.elements.EmailInput, utils.badEmail); // Simulate typing a username

    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));
  }

  async allFieldsButUserNameNameTypedIn() {
    const localUser = userEvent.setup();

    await localUser.type(this.elements.EmailInput, utils.badEmail); // Simulate typing a bad email
    await localUser.type(this.elements.PasswordInput, utils.inputPassword);
    await localUser.type(this.elements.ConfirmPwdInput, utils.inputPassword);

    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));
  }

  async allFieldsEmptyButtonPressed() {
    const localUser = userEvent.setup();

    await localUser.click(screen.getByRole("button", { name: /sign up/i }));
  }

  async expectedBadEmailErrorToBeDisplayed() {
    // Ensure the error message is awaited and asserted properly
    expect(
      await screen.findByText(utils.signupErrMsg.EMAIL_BAD_ERROR),
    ).toBeInTheDocument();
  }

  async expectedMissingEmailToBeDisplayed() {
    // Ensure the error message is awaited and asserted properly
    expect(
      await screen.findByText(utils.signupErrMsg.EMAIL_MISS_ERROR),
    ).toBeInTheDocument();
  }

  async expectedMissingUserNameErrorDisplayed() {
    expect(
      await screen.findByText(utils.signupErrMsg.MISSING_USERNAME_ERROR),
    ).toBeInTheDocument();
  }

  async expectedErrorWhenEmptyFieldsAndButtonPressed() {
    expect(screen.getByTestId("error-element")).toBeInTheDocument();
  }
}
