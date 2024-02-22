**16 Feb 2024**

Configured Jest for the project.
Followed the instructions: 
[mastering jest configuration with vite](https://dev.to/shmbajaj/mastering-jest-configuration-for-react-typescript-projects-with-vite-a-step-by-step-guide-4k4b)

The very first test written with using Playground from RTL.


**17 Feb. 2024**



1. Added Tailwind CSS
2. Created couple of test to make kind of 'integration tests'.
3. Modified jest script by adding --watch flag.

The whole thing needs to constant improvements.


**18 Feb. 2024**

Added singup page.


**19 Feb. 2024**

1. Making some improvements in the Login page.
2. Added white text color for input fields when in Dark mode.
3. Use of keyof operator.

**20 Feb. 2024**

1. Finishing the SignupPage component.
2. Adding tests for Signup component.
3. First use of MemoryRouter in the tests.

**21 Feb. 2024**

1. Adding prettier for better formatting.
2. Polishing and refactoring Signup component.
3. Trying to get better at type indexers

There is still one type problem to be solved in Signup component's value property of its Input component.

**22 Feb. 2024**

1. Corrected the small issue from previous day.
2. Added small test for signup Page.
3. The test with checking the button. clicked needs to be prepared

Wanted to add test checking if button click using fireEvent on the signup button is causing call to the function. Tried with mock function jest.fn().
For now without success.