import { FormAction } from "../formaction/FormAction"
import { Input } from "../input/Input"
import { signupFields } from "../../constans/formFields"
import { useState } from "react"


export const Signup = function() {

    const [signupState, setSignupState] = useState({})
    const fields   = signupFields 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignupState(event.target.value);
        console.log(event.target.value);
        return null;
      };

      const handleSubmit = (event: React.ChangeEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log(`GK handleSubmit signupState: ${signupState}`)
        createAccount()
      }


      const createAccount = () => {
        console.log(`createAccount called`)
      }


    return (
       <div className="mt-8 space-y-6">
        <div className="">
            {
            fields.map(field => 
                <Input
                    id={field.id}
                    key={field.id}
                    handleChange={handleChange}
                    value=''
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                    customClass=""
                />
                )
            }
            <FormAction handlesubmit={handleSubmit} text = 'Sign up' />

        </div>
       </div>
    )
}