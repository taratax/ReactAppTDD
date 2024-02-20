import { render, screen } from '@testing-library/react';
import { SignupPage } from './SignupPage';
import { MemoryRouter } from 'react-router-dom';


describe('Testing the signup view', () => {

    it('Checking the text Signup to create account', () => {
       
        render(
        <MemoryRouter  initialEntries={["/signup"]}>
        <SignupPage />
        </MemoryRouter>
        )
        // screen.logTestingPlaygroundURL();

        const element = screen.getByRole('heading', {
            name: /signup to create /i
          })

          expect(element).toBeInTheDocument()

    })

    it('Checking Already have account text', () => {
        render(
            <MemoryRouter initialEntries={["/signup"]}>
                <SignupPage />
            </MemoryRouter>
        )

        const element = screen.getByText(/already have account\?/i)

        expect(element).toBeInTheDocument()
    })


})