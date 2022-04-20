import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// import { UserContext } from '../../contexts/user.context';

import { SignUpForm } from './sign-up.styles.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const [ formFields,  setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

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
      // setCurrentUser(user);

      //building out a user document:
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
    <SignUpForm>
      <h2>Create a new account</h2>
      <span>It’s quick and easy.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="sign-up-displayName"
          onChange={handleChange}
          name="displayName"
          type="text"
          value={displayName}
          required
        />
        <FormInput
          label="Email:"
          id="sign-up-email"
          onChange={handleChange}
          name="email"
          type="email"
          value={email}
          required
        />
        <FormInput
          label="Password:"
          id="sign-up-password"
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password:"
          id="sign-up-confirmPassword"
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpForm>
  )
}

export default SignUp;