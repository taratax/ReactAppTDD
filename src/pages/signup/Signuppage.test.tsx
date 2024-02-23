import { render, screen } from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event";
import { SignupPage } from "./SignupPage";
import { MemoryRouter } from "react-router-dom";

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
    const [username, email] = screen.getAllByRole("textbox");
    const password = screen.getAllByLabelText(/password/i);

    user.click(username);
    userEvent.type(username, "alamakota");

    user.click(email);
    userEvent.type(email, "alamakota@gmail.com");

    const theButton = screen.getByRole("button", { name: /sign up/i });
    user.click(theButton);
    // try to check if the handlesubmit button's been called

    expect(theButton).toBeInTheDocument();
    expect(theButton).toHaveAttribute("type", "submit");

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toHaveLength(2);
  });
});
