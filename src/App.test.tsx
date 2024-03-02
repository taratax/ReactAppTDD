import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

/**
 * @jest-environment node
 */

describe.skip("App", () => {
  it("should work as expected", () => {
    render(<App />);
    screen.logTestingPlaygroundURL();
  });

  it("Check for text login to your account", () => {
    render(<App />);

    const element = screen.getByRole("heading", {
      name: /login to your account/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("The dont have account displayed", () => {
    render(<App />);

    const element = screen.getByText(/don't have a count yet \?/i);
    expect(element).toBeInTheDocument();
  });

  it("link for signup is on the screen", () => {
    render(<App />);
    expect(
      screen.getByRole("link", {
        name: /signup/i,
      }),
    ).toBeInTheDocument();
  });

  it("login input field with password placeholder is present ", () => {
    render(<App />);
    const elem = screen.getByLabelText(/password/i);
    expect(elem).toBeInTheDocument();
  });

  it("textbox with email address placeholder is on the screen", () => {
    render(<App />);
    expect(
      screen.getByRole("textbox", {
        name: /email address/i,
      }),
    ).toBeInTheDocument();
  });
});

describe("App click signup", () => {
  it("Verify signup subpage is rendered", async () => {
    //setup user event
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByRole("link", { name: /signup/i })).toBeInTheDocument();
    await user.click(screen.getByRole("link", { name: /signup/i }));
    const element = screen.getByText(/signup to create /i);
    expect(element).toBeInTheDocument();
  });
});
