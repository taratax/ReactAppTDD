import { useState } from "react"
import { loginFields, loginFieldsType } from "../../constans/formFields"
import { Input } from "../input/Input"
import { FormAction } from "../formaction/FormAction"
import { FormExtra } from "../formextra/FormExtra"

const fields   = loginFields 

export const Login = function() {

const fieldsState : loginFieldsType = {
        labelText:"Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder:"Email address"
}
// fields.forEach(field => fieldsState[field.id]='')
    
    const [loginState ,setLoginState] = useState(fieldsState)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({...loginState ,[event.target.id]:event.target.value});
        console.log(event.target.value);
        return null;
      };

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        authenticateUser()
      }

          //Handle Login API Integration here
    const authenticateUser = () =>{

    }
    
    const mapper = function(field: loginFieldsType) {
      const indexer : keyof loginFieldsType  = field.id as keyof loginFieldsType // not very good - type assertion !...
     
        return (<Input 
            key={field.id}
            handleChange={handleChange}
            value={ loginState[indexer] as string }
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder} 
            customClass="dark:text-white"
            />)
        
    }

    return (
       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">{fields.map(mapper)}</div>
        <FormExtra />
        <FormAction handlesubmit={()  => { return null}} text="Login"/>
       </form>
    )
}

