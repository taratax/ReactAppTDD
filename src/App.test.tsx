import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it.skip('should work as expected', () => {
    render(<App />);
    screen.logTestingPlaygroundURL();
  });

  it('check for text Vite on screen', async () => {
    render(<App />);
	screen.getByRole('heading', {
  		name: /vite \+ react/i
	});
});
 
});
