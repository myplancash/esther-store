import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.styles.scss';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user);
      console.log({user})
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/user-not-found':
          alert("No user associated with this email, create an account first!");
          break;
        case 'auth/wrong-password':
          alert("Incorrect password")
          break;
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }


  return (
    <div className="sign-in-form">
      <h2>Already have an account?</h2>
      <span>Sign In  with your email and password:</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          id="sign-in-email"
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          id="sign-in-password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonStyle="google">Sign In With Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn;