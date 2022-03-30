import './sign-in.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <button onClick={logGoogleUser}>Log With Google</button>
      </div>
    </div>
  )
}

export default SignIn;