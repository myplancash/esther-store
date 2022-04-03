import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const SignUp = () => {
  const [ formFields,  setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  // we need to be able to identify which of these inputs is firing
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  return (
    <div>
      <h1>SignUp Form</h1>
      <form onSumbit={ () => {} }>
        <label for="">Display Name:</label>
        <input onChange={handleChange} name="displayName" type="text" value={displayName} required/>

        <label for="">Email:</label>
        <input onChange={handleChange} name="email" type="email" value={email} required/>

        <label for="">Password:</label>
        <input onChange={handleChange} name="password" type="password" value={password} required/>

        <label for="">Confirm Password:</label>
        <input onChange={handleChange} name="confirmPassword" type="password" value={confirmPassword} required/>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;