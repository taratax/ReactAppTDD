import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should work as expected', () => {
    render(<App />);
    screen.logTestingPlaygroundURL();
  });


it('Check for text login to your account', () => {

  render(<App />)

  const element = screen.getByRole('heading', {
    name: /login to your account/i
  })

  expect(element).toBeInTheDocument();

})

it('The dont have account displayed', () => {
  render(<App/>)

  const element = screen.getByText(/don't have a count yet \?/i)
  expect(element).toBeInTheDocument()
})

it('link for signup is on the screen', () => {
  render(<App/>)
  expect(screen.getByRole('link', {
    name: /signup/i
  })).toBeInTheDocument()
})

it('login input field with password placeholder is present ', () => {
  render(<App />)
  const elem = screen.getByLabelText(/password/i)
  expect(elem).toBeInTheDocument()
})

it('textbox with email address placeholder is on the screen', () => {
  render(<App />)
  expect(
  screen.getByRole('textbox', {
    name: /email address/i
  })
  ).toBeInTheDocument()
})

 
});
