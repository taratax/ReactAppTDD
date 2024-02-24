import { render, screen } from '@testing-library/react';

import { Signup} from './Signup';

describe('Testing  Signup component', () => {


    it('The button sign up should be visible on screen', () => {
        render(<Signup />)
        screen.logTestingPlaygroundURL();
      

        const element = screen.getByRole('button', {
            name: /sign up/i})

          expect(element).toBeInTheDocument()

    })

    it('test whether the function on button signup called', () => {
        
        render(<Signup />)

        const theButton =  screen.getByRole("button")
        expect(theButton).toBeInTheDocument()
        expect(theButton).toHaveAttribute("type", "submit") 

    })

})


