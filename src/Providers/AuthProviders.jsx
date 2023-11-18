import { createContext, useEffect, useState } from "react";
import auth from "../configurations/firebase/firebase.confic";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = { registerEmailPass, loginEmailPass, user, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
