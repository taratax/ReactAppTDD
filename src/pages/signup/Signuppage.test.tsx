import { portalNameDialogs } from "../../constans/formFields";
import { ValidateFormPO } from "./ValidateFormPO";

const addPortalDivToBody = (portalId: string): void => {
  const portalDiv = document.createElement("div");
  portalDiv.setAttribute("id", portalId);
  document.body.appendChild(portalDiv);
};

describe("Using PageObject for testing", () => {
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

  it("When typed username, passwords and bad email then show bad email error", async () => {
    // given
    const theObject = ValidateFormPO.render();
    //when
    await theObject.typedUserNamePasswordsAndBadEmailFormat();
    //then
    await theObject.expectedBadEmailErrorToBeDisplayed();
  });

  it("User types only username nothing  more, missing email msg expected", async () => {
    //given
    const theObject = ValidateFormPO.render();
    //when
    await theObject.typedUserNameOnly();
    //then
    await theObject.expectedMissingEmailToBeDisplayed();
  });

  it("Type only  email field => missing username message appear", async () => {
    //given
    const theObject = ValidateFormPO.render();
    //when
    await theObject.typedEmailAddressOnly();
    //then
    await theObject.expectedMissingUserNameErrorDisplayed();
  });

  it("All fields filled in but username => missing username message appear", async () => {
    //given
    const theObject = ValidateFormPO.render();
    //when
    await theObject.allFieldsButUserNameNameTypedIn();
    //then
    await theObject.expectedMissingUserNameErrorDisplayed();
  });

  it("If no fields filled and button pressed, error should appear", async () => {
    //given
    const theObject = ValidateFormPO.render();
    //when
    await theObject.allFieldsEmptyButtonPressed();
    //then
    await theObject.expectedErrorWhenEmptyFieldsAndButtonPressed();
  });
});
