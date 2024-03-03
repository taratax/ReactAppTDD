import { ErrorDialog } from "./ErrorDialog";
import { render, screen, fireEvent } from "@testing-library/react";
import { portalNameDialogs } from "../../../constans/formFields";
import * as utils from "../../../utils/utils";

import App from "../../../App";
import userEvent from "@testing-library/user-event";

describe("The disalog should be visible", () => {
  it.skip("render skeleton of the modal dialog", () => {
    render(<ErrorDialog onClose={() => {}} portalName={portalNameDialogs} />);
    screen.logTestingPlaygroundURL();

    const theText = screen.getByText(
      /formularz zawiera błędy popraw je, a następnie ponownie wyślij formularz\./i,
    );

    expect(theText).toBeInTheDocument();
  });

  it("Render PopUp Properly", async () => {
    const spy = jest.spyOn(utils, "emailValidation");

    // const container = document.createElement("div");
    // document.body.appendChild(container);

    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByRole("link", { name: /signup/i })).toBeInTheDocument();
    await user.click(screen.getByRole("link", { name: /signup/i }));
    const element = screen.getByText(/signup to create /i);
    expect(element).toBeInTheDocument();

    const [, email] = screen.getAllByRole("textbox");
    const password = screen.getAllByLabelText(/password/i);

    user.click(email);
    // fireEvent.change(email, { target: { value: utils.inputEmail } });
    await user.type(email, `taratax#gmail.com`);

    fireEvent.change(password[0], { target: { value: utils.inputPassword } });
    fireEvent.change(password[1], { target: { value: utils.inputPassword } });

    const theForm = screen.getByRole("form");
    fireEvent.submit(theForm);

    expect(spy).toHaveBeenCalledWith(`taratax#gmail.com`);
    expect(spy).toHaveReturnedWith(false as boolean);

    const theText = screen.getByText(/formularz zawiera/i);

    expect(theText).toBeInTheDocument();
  });
});
