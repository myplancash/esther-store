import './sign-in.styles.scss';

import SignUp from '../../components/sign-up/sign-up.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Log With Google Pop up</button>
      <SignUp />
    </div>
  )
}

export default SignIn;