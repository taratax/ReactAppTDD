import { Header } from "../../components/header/Header";
import { Signup } from "../../components/signup/Signup";

export const SignupPage = function ({ backgroundColor = "white" }) {
  return (
    <>
      <Header
        heading="Signup to create account"
        paragraph="Already have account?"
        linkName="Login"
        linkUrl="/"
        backgroundColor={`${backgroundColor}`}
      />
      <Signup />
    </>
  );
};
