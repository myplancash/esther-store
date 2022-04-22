import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setUserContext: () => null,
  userContext: null,
})

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  console.log('dispatched')
  console.log(action)
  const { type, payload } = action;
  switch(type) {
    case  USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`unhandled type ${type} in userReducer`)
  }

}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser ] = useState(null);
  // const [state, dispatch] = useReducer(userReducer, INITIAL_USER_STATE)
  const [ {currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
  console.log(currentUser)

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
    if(user) {
      //the userSnapshop logic already did all the verifications when we defined it, if exists() or not
      createUserDocumentFromAuth(user);
    } //otherwise:
      setCurrentUser(user)
      // if a user sign-out we want to set null, sign-in we wanna store the object
    })
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

};
