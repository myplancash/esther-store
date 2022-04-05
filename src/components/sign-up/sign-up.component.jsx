import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up.styles.scss';

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert("The email is already in use!")
      } else {
        console.log('user creation encounter an error', error.message);
      }
    }
  }

  // we need to be able to identify which of these inputs is firing
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  return (
    <div className="sign-up-form">
      <h2>Do you have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="displayName"
          onChange={handleChange}
          name="displayName"
          type="text"
          value={displayName}
          required
        />
        <FormInput
          label="Email:"
          id="email"
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
          required
        />
        <FormInput
          label="Password:"
          id="password"
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password:"
          id="confirmPassword"
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
        />
        <Button buttonStyle="" type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp;