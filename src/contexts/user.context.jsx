import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
  userContext: null,
  setUserContext: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser ] = useState(null);
  const value = { currentUser, setCurrentUser }
  signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
    if(user) {
      //rhe userSnapshop  logic already did all the verifications when we defined it, if exists() or not
      createUserDocumentFromAuth(user)
    } //otherwise:
      setCurrentUser(user)
      // if a user sign-out we want to set null, sign-in we wanna store the object
    })
    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
