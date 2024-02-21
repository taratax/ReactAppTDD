import { render, screen } from '@testing-library/react';

import { Signup} from './Signup';

describe.skip('Testing  Signup component', () => {


    it('The button sign up should be visible on screen', () => {
        render(<Signup />)
        screen.logTestingPlaygroundURL();
      

        const element = screen.getByRole('button', {
            name: /sign up/i})

          expect(element).toBeInTheDocument()

    })

})


