import {
  render,
  screen,
  fireEvent,
  getByRole,
  getAllByRole,
  getAllByLabelText,
  findByText,
} from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event";
import { SignupPage } from "./SignupPage";
import { MemoryRouter } from "react-router-dom";
import * as utils from "../../utils/utils";

export class ValidateFormPO {
  private elements: {
    // submitButton: HTMLElement;
    theForm: HTMLElement;
    UsernameInput: HTMLInputElement;
    EmailInput: HTMLInputElement;
    PasswordInput: HTMLInputElement;
    ConfirmPwdInput: HTMLInputElement;
  };

  protected constructor(protected container: HTMLElement) {
    this.elements = {
      theForm: getByRole(container, "form"),
      UsernameInput: getAllByRole(container, "textbox")[0] as HTMLInputElement,
      EmailInput: getAllByRole(container, "textbox")[1] as HTMLInputElement,
      PasswordInput: getAllByLabelText(
        container,
        /password/i,
      )[0] as HTMLInputElement,
      ConfirmPwdInput: getAllByLabelText(
        container,
        /password/i,
      )[1] as HTMLInputElement,
    };
  }

  static render() {
    const { container } = render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignupPage />
      </MemoryRouter>,
    );
    return new ValidateFormPO(container as HTMLElement);
  }

  async typedUserNameAndBadEmailFormat() {
    const localuser = userEvent.setup();
    user.click(this.elements.EmailInput);
    await localuser.type(this.elements.EmailInput, `${utils.badEmail}`);

    fireEvent.change(this.elements.PasswordInput, {
      target: { value: utils.inputPassword },
    });
    fireEvent.change(this.elements.ConfirmPwdInput, {
      target: { value: utils.inputPassword },
    });

    const theForm = screen.getByRole("form");
    fireEvent.submit(theForm);

    // await waitFor(() => {
    //   expect(
    //     screen.getByText(new RegExp(utils.EMAIL_BAD_ERROR, "i")),
    //   ).toBeInTheDocument();
    // });
    return findByText(this.container, utils.MISSING_USERNAME_ERROR);
  }
}
