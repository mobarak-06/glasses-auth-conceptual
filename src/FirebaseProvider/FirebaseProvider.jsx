import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const googleProvider  = new GoogleAuthProvider();
const githubProvider  = new GithubAuthProvider();
const TwitterProvider  = new TwitterAuthProvider();
const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true)
  console.log(currentUser);

  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile image

  const updateUserProfile = (name, image) =>{
   return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: image 
    })
  }

  //   google login
  const googleLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider);
  }
  //   github login
  const githubLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, githubProvider);
  }
  //   twitter login
  const twitterLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, TwitterProvider);
  }

//   logOut
const logOut = () =>{
   return signOut(auth);
}

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  const allValue = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    twitterLogin,
    logOut,
    currentUser,
    loading,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
