import { createContext } from "react";
import auth from "../configurations/firebase/firebase.confic";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const registerEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { registerEmailPass };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
