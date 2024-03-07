import { ErrorDialog } from "./ErrorDialog";
import { render, screen } from "@testing-library/react";
import { portalNameDialogs } from "../../../constans/formFields";

const addPortalDivToBody = (portalId: string): void => {
  const portalDiv = document.createElement("div");
  portalDiv.setAttribute("id", portalId);
  document.body.appendChild(portalDiv);
};

describe("The disalog should be visible", () => {
  beforeEach(() => {
    addPortalDivToBody(portalNameDialogs);
  });

  afterEach(() => {
    // Clean up the portal div from the document body
    const portalDiv = document.getElementById(portalNameDialogs);
    if (portalDiv) {
      document.body.removeChild(portalDiv);
    }
  });

  it("render skeleton of the modal dialog", () => {
    render(
      <ErrorDialog
        onClose={() => {}}
        portalName={portalNameDialogs}
        errorTextMsg={`just a test sreing`}
      />,
    );
    screen.logTestingPlaygroundURL();

    const theText = screen.getByText(/just a test sreing/i);

    expect(theText).toBeInTheDocument();
  });
});
