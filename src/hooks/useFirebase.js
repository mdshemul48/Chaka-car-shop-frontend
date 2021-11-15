import { useState, useEffect } from 'react';
import useAxios from './useAxios';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import firebaseInitialization from '../config/firebase.init';

firebaseInitialization();

const useFirebase = () => {
  const axios = useAxios();
  const [user, setUser] = useState({});
  const [adminRole, setAdminRole] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();
  // getting token for current user
  useEffect(() => {
    auth.currentUser
      ?.getIdToken()
      .then((token) => {
        setToken(token);
      })
      .catch((mess) => {
        console.log(mess);
      });
  }, [auth.currentUser]);

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

  // create user in to the server
  const createUser = (name, email) => {
    setIsLoading(true);
    setError(null);
    axios
      .post('/users', { name, email })
      .then((res) => {
        console.log('user created');
      })
      .catch((error) => {
        setError(error);
      });
  };

  // this function will be called when the user will create an account
  const createAccountWithEmailAndPassword = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ ...userCredential.user, displayName: name });
        changeName(name);
        if (userCredential.user.email) {
          createUser(name, email);
        }
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

  useEffect(() => {
    setAdminLoading(true);
    if (token.length > 0) {
      axios
        .post(
          '/users/me',
          {},
          { headers: { authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          setAdminRole(res.data.admin);
        })
        .finally(() => {
          setAdminLoading(false);
        });
    }
  }, [token]);

  return {
    user,
    token,
    adminRole,
    isLoading,
    error,
    adminLoading,
    createAccountWithEmailAndPassword,
    loginInWithEmailAndPassword,
    logOut,
  };
};

export default useFirebase;
