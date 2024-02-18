import { Header } from "../../components/header/Header"
import { Login } from "../../components/login/Login"

export const LoginPage = function() {
    return (
        <>
        <Header 
        heading="Login to your account"
        paragraph="Don't have  a count yet ?"
        linkName="Signup"
        linkUrl="/signup"
        />
        <Login />
        </>
    )
}