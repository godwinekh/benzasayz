import { auth } from "./../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const logoutHandler = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user: user, logout: logoutHandler }}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
