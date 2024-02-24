import { render, screen, fireEvent } from "@testing-library/react";
import user  from "@testing-library/user-event";

import { FormAction } from "./FormAction";

describe("Testing if function submit get called",  () => {
  it("check function calling", async () => {
    
    const submitHandler = jest.fn();
    render(<FormAction handlesubmit={submitHandler} text="sign up" />);
    
    screen.logTestingPlaygroundURL();

    const theButton =  screen.getByRole('button')
    user.click(theButton);
    const theForm = screen.getByRole('form')
    fireEvent.submit(theForm)
       
    expect(submitHandler).toHaveBeenCalled()
    expect(theButton).toHaveAttribute("type","submit")
    expect(theForm).toBeInTheDocument()

  });
});
