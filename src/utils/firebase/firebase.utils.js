import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ9B_Oc5ojio7IhI6fLGmkonfwROxXYZo",
  authDomain: "esther-store-db.firebaseapp.com",
  projectId: "esther-store-db",
  storageBucket: "esther-store-db.appspot.com",
  messagingSenderId: "914739485326",
  appId: "1:914739485326:web:a3eea0ab01be6c873d07df"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userAuth)
  //to check whether or not the doc actually exists it returns a boole
  console.log(userSnapshot.exists());
  // if it does not exist it will return true and we will set new Doc
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
}