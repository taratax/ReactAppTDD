import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  it("should render navigation links correctly", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    // Assert that the navigation bar is rendered with correct navigation options
    expect(screen.getByText("City Guide")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Places to Visit" }),
    ).toHaveAttribute("href", "/places");
    expect(screen.getByRole("link", { name: "Hotels" })).toHaveAttribute(
      "href",
      "/hotels",
    );
    expect(screen.getByRole("link", { name: "Eating Out" })).toHaveAttribute(
      "href",
      "/eating-out",
    );
    expect(screen.getByRole("link", { name: "Night Life" })).toHaveAttribute(
      "href",
      "/night-life",
    );
    expect(
      screen.getByRole("link", { name: "Transportation" }),
    ).toHaveAttribute("href", "/transportation");
  });
});
