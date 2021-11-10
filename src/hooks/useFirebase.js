import { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import firebaseInitialization from '../config/firebase.init';

firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();

  // this function will be called when the user is signed in
  const loginInWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // this function will be called when the user will create an account
  // and this will set a new user name
  const changeName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // this function will be called when the user will create an account
  const createAccountWithEmailAndPassword = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ ...userCredential.user, displayName: name });
        changeName(name);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  // this will look for the user state and this will change the user state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // this function will be called when the user will logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    user,
    isLoading,
    error,
    createAccountWithEmailAndPassword,
    loginInWithEmailAndPassword,
    logOut,
  };
};

export default useFirebase;
