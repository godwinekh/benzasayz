import { auth } from "./../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import { useNavigate } from "react-router-dom";

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });    
  }, []);

  useEffect(() => {
    if (isLoggedOut) {
      navigate("/console/admin/authenticate-user");
    }
  }, [isLoggedOut, navigate]);

  const logoutHandler = async () => {
    await signOut(auth);
    setIsLoggedOut(true);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user: user, logout: logoutHandler }}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
