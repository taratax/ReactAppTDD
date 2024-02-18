import { useState } from "react"
import { loginFields } from "../../constans/formFields"
import { Input } from "../input/Input"
import { FormAction } from "../formaction/FormAction"
import { FormExtra } from "../formextra/FormExtra"

export const Login = function() {
    
    const [, setLoginState] = useState({})
    const fields   = loginFields 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState(event.target.value);
        console.log(event.target.value);
        return null;
      };

    
    return (
       <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map( field => <Input 
                key={field.id}
                handleChange={handleChange}
                value=''
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder} 
                customClass=""
                
                />)
            }
        </div>
        <FormExtra />
        <FormAction handlesubmit={()  => { return null}} text="Login"/>
       </form>
    )
}

