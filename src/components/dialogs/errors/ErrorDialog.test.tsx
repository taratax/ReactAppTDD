import { ErrorDialog } from "./ErrorDialog"
import { render, screen } from "@testing-library/react";
import { portalNameDialogs } from "../../../constans/formFields";

describe('The disalog should be visible', () => {

    //arrange try to create dialogs div

    

    render(
        <ErrorDialog onClose={()=>{}} portalName={portalNameDialogs}/>
    )
    screen.logTestingPlaygroundURL();
})