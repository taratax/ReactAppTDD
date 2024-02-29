import { ErrorDialog } from "./ErrorDialog";
import { render, screen } from "@testing-library/react";
import { portalNameDialogs } from "../../../constans/formFields";
import { createPortal } from "react-dom";

describe("The disalog should be visible", () => {


  it.skip("render skeleton of the modal dialog", () => {
    render(<ErrorDialog onClose={() => {}} portalName={portalNameDialogs} />);
    screen.logTestingPlaygroundURL();

    const theText = screen.getByText(
      /formularz zawiera błędy popraw je, a następnie ponownie wyślij formularz\./i
    );

    expect(theText).toBeInTheDocument();
  });

  it.skip("Render PopUp Properly", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    createPortal(
      <ErrorDialog onClose={() => {}} portalName={portalNameDialogs} />,
      container
    );
    expect(container.innerHTML).toMatchSnapshot();
    expect(container).toBeInTheDocument();

    const theText = screen.getByText(
      /formularz zawiera błędy popraw je, a następnie ponownie wyślij formularz\./i
    );

    expect(theText).toBeInTheDocument();
  });
});
