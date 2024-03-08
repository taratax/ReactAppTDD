import {
  render,
  screen,
  fireEvent,
  getByRole,
  getAllByRole,
  getAllByLabelText,
} from "@testing-library/react";
import { SignupPage } from "./SignupPage";
import { MemoryRouter } from "react-router-dom";

export class ValidateFormPO {
  private elements: {
    // submitButton: HTMLElement;
    theForm: HTMLElement;
    emailUserInput: HTMLInputElement[];
    passwordInputs: HTMLInputElement[];
  };

  protected constructor(protected container: HTMLElement) {
    this.elements = {
      theForm: getByRole(container, "form"),
      emailUserInput: getAllByRole(container, "textbox"),
      passwordInputs: getAllByLabelText(container, /password/i),
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
}
