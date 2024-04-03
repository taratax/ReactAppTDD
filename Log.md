**1. **16 Feb 2024****

Configured Jest for the project.
Followed the instructions: 
[mastering jest configuration with vite](https://dev.to/shmbajaj/mastering-jest-configuration-for-react-typescript-projects-with-vite-a-step-by-step-guide-4k4b)

The very first test written with using Playground from RTL.


**2. **17 Feb. 2024****



1. Added Tailwind CSS
2. Created couple of test to make kind of 'integration tests'.
3. Modified jest script by adding --watch flag.

The whole thing needs to constant improvements.


**3. **18 Feb. 2024****

Added singup page.


**4. **19 Feb. 2024****

1. Making some improvements in the Login page.
2. Added white text color for input fields when in Dark mode.
3. Use of keyof operator.

**5. **20 Feb. 2024****

1. Finishing the SignupPage component.
2. Adding tests for Signup component.
3. First use of MemoryRouter in the tests.

**6. **21 Feb. 2024****

1. Adding prettier for better formatting.
2. Polishing and refactoring Signup component.
3. Trying to get better at type indexers

There is still one type problem to be solved in Signup component's value property of its Input component.

**7. **22 Feb. 2024****

1. Corrected the small issue from previous day.
2. Added small test for signup Page.
3. The test with checking the button. clicked needs to be prepared

Wanted to add test checking if button click using fireEvent on the signup button is causing call to the function. Tried with mock function jest.fn().
For now without success.

**8. **23 Feb. 2024****

1. Corrected type for submit handler
2. Added some instructions to test file for signuppage
3. Added form element as a container for a button

Still need to rethink the signup component.ut 
Still not tested if submit method called in test.

**9. **24 Feb. 2024****

1. Added new test file for FomAction component
2. Refactored the handle submit handler for Signup component added new folder 'utils' and created module with function imported in Signup function for subbmitting the form.
3. Used for the first time jest.spyOn method on the newly created mentioned. function.

Now I'm able to test if function was called after submit event was fired. Note that I was not able to fire the submit handler function by clicking the button. I had to use fireEvent.subbmit(...) call. Also mentioned refactoring was necessary, otherwise I could not check internal function call took place. Moving function definition to separate module and call it from within the internal function made that possible.

There is still problem when I'm checking the paramter's object on spied function I do not see the values entered into input fields.
This needs to be innvestigated, likely it has something with the fact that componnent under test calls the function passing its internal state as an argument.

Resources used:

https://medium.com/@patryk.nather/testing-local-functions-in-react-components-with-jest-55fe50a9032b

https://medium.com/developer-rants/testing-the-react-component-state-with-jest-b0a072f70f44

**10. 25. Feb. 2024**

It turned out that had to change from userEvent.type(username, "alamakota"); to fireEvent.change(email, { target: { value: utils.inputEmail } });
This way I finally was able to write a test which verify whether function was called with the object containing the values entered into input fields. Added some constants to a utils.js file with values for password and email used in the test.
Refactored the Login component same way as Signup end extracted skeleton funnctions to a utils module. This allows me to write tests to verify if input values are passed correctly.


**11. 26. Feb. 2024**

Today added new test to signupage with email format verification. Added new function exported from utils module. Again, creating this function as separate piece allows mee to write test.
Next we need to create popup or other indication for user that email address is not correct.

**12. 27. Feb. 2024**

Replaced the 'fireEvent.change' with 'userEvent.type(..' as this is more RTL way. 
Initially my test fails but I forgot to use async for the test function. Also we need to add await in the 'type' call. Now the test passes.
Resource I found was: https://allmaddesigns.com/test-react-text-input-with-user-event/

**13. 28 Feb. 2024**

First try of creation modal error while user clicks button on signup page with wrogly typed email address. Some problems occurred as I decided to go with portals. Was not able to render correctly new ErrorDialog component.

**14. 29. Feb. 2024**

Trying to write complete test with the process of signup.
For now I still have some issues finishing it. For example there is a problem with clicking on the link in order to move from login page to signup page. Even though The event is fired the assertion for signup page fails. It definitelly not causing redirection to the page. I added also __snapshots__ forlder for the dialog component. The idea is that when user types in wrongly formatted email address then we should see the dialog informing about it. New component 'ErrorDialog' has been created for this situation.

**15. 02. Mar. 2024**

After some struggle, I was able to write test where clicking signup link moves us to signup page. There was an issue with message 'Request not defined'. Some googling pointed me to a solution which requires instaling 'jest-fetch-mock' package and adding 'enableFetchMocks();' to a 'setupTest.ts. Resource: https://stackoverflow.com/questions/74497916/referenceerror-request-is-not-defined-when-testing-with-react-router-v6-4 .

**16. 03. Mar. 2024**

Start working on additional features validating the signup form.
Still not finished. Added new tests and started refactoring according to the test driven development process.

**17. 04. Mar. 2024**
Finally successfully created test with component rendered within portal. Now we can check error message correctnes on the signup page.
Tests in the suite can check text messages accordingly to values entered into input fields.

**18. 05. Mar. 2024**

Today We added some refactor on ( still ) signup page. Added new Dialog context showing modal after account creation success.
The function for creation account is still a mock. It is called when form validation finishes with success.
Today we did not write a test.

**19. 06. Mar. 2024**
Adding Storybook to the project.

**20. 07. Mar. 2024**

Refactoring, adding fixes error dialog test suite.

**21. 08. Mar. 2024**
Starting, not finished, adding page object for tests for signum page.
The goal is to see if we can add such a pattern in relatively simple scenario.

**22. 09. Mar. 2024**
Another try with page object pattern, still not finished successfully.
My test with PO use always pass, need to look into more.

**23. 11. Mar. 2024**
Continuation with Page object pattern in testing the signup page

**24. 12. Mar. 2024**
Upgrade of Storybook. Adding first story of Signup Page.

**25. 14. Mar. 2024**
First small success with creating story for StoryBook with the header component.
Initially it was not posible due to use of router. Installed the package:
https://www.npmjs.com/package/storybook-addon-remix-react-router

**26. 15. Mar. 2024**
Added stories for SignupPage and LoginPage.

**27. 16. Mar. 2024**

Improved tests with PO pattern.

**28. 17. Mar. 2024**

Some cleanup for the tests, use test-id for err msg check. Need to improve it next time.

**29. 18. Mar. 2024**

Today, we delved into Storybook, starting with establishing some structure for our stories. We then explored the default exports in a story file, focusing on understanding the purpose of args and argTypes. Additionally, we investigated how to display controls on the Storybook dashboard for our project and briefly touched upon the autodocs feature, though we haven't completed this part yet. One challenge we're facing is figuring out how to export a background control and ensure it takes effect when we're using TailwindCSS for styling.

**30. 19. Mar. 2024**

Small add to stories for header, still testing, and playing with storybook.

**31. 20. Mar. 2024**

Added parameter for background color picker in story for header. Now it is time to make it same for main part of the login signup pages.

**32. 21. Mar. 2024**

Added story with interaction using storybook/test package. Unfortunatelly still not working as expected.
I'm expecting clicking button in storybook will show us a message error. In normal tests we have it covered in 
jest/RTL using page object pattern. Did some cleaning removing skipped tests.

**33. 27. Mar. 2024**

Added story for the button in our FormAction component.

**34. 03. Apr. 2024***

Adding new component nav bar. Use storybook as main driver. We are going to create new components primarily in isolation, using storybook.