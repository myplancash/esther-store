import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
// import { UserContext } from '../../contexts/user.context';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
      /* switch(error.code) {
        case 'auth/user-not-found':
          alert("No user associated with this email, create an account first!");
          break;
        case 'auth/wrong-password':
          alert("Incorrect password")
          break;
        default:
          console.log(error)
      } */
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }


  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}>
              Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn;