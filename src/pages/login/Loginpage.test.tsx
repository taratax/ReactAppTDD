import { render, screen, fireEvent } from "@testing-library/react";

import { LoginPage } from "./LoginPage";
import { MemoryRouter } from "react-router-dom";
import * as utils from "../../utils/utils";

describe("tests for login page", () => {
  it.skip("check if page renders", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <LoginPage />
      </MemoryRouter>
    );

    screen.logTestingPlaygroundURL();

    const element = screen.getByText(/Don't have a count yet \?/i);

    expect(element).toBeInTheDocument();
  });

  it("after button clicked", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <LoginPage />
      </MemoryRouter>
    );

    const spy = jest.spyOn(utils, "handleSubmitLogin");
    
    // get references to inputs
    const inputEmail = screen.getByRole("textbox", {
      name: /email address/i,
    });

    const inputPassword = screen.getByLabelText(/password/i);

    //change values in inputs
    fireEvent.change(inputEmail, { target: { value: utils.inputEmail } });
    fireEvent.change(inputPassword, { target: { value: utils.inputPassword } });
    
    //after inputs filled we need to fire the event submit
    const theForm = screen.getByRole("form");
    fireEvent.submit(theForm);

    //check if the function was called:
    expect(spy).toHaveBeenCalled();

    //prepare the object:
    const theObject = {
        labelText: 'Email address',
        labelFor: 'email-address',
        id: 'email-address',
        name: 'email',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        placeholder: 'Email address',
        'email-address': utils.inputEmail,
        password: utils.inputPassword
      }

      //verify if the object received is same:
      expect(spy).toHaveBeenCalledWith(theObject);


  });
});
