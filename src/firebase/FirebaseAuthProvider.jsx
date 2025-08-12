import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //creat user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signUp user
  const signUpUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signInWithGoggleUser
  const signInWithGoggleUser = () => {};
  //onAuth change
  useEffect(() => {
    const unsusCribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      console.log(crueentUser);
    });
    return () => {
      unsusCribe();
    };
  }, []);

  //LogoutUser
  const logOut = () => {
    return signOut(auth);
  };

  //user data value
  const userData = {
    user,
    setUser,
    creatUser,
    signUpUser,
    signInWithGoggleUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
