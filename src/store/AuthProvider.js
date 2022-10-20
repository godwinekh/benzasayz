import { auth } from "./../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import { useNavigate } from "react-router-dom";

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    if (!uid) {
      navigate("/console/admin/authenticate-user");
    }
  }, [uid, navigate]);

  const logoutHandler = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user: user, logout: logoutHandler }}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
