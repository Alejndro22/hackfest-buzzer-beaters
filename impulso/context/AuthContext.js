import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/client";

export const AuthContext = createContext();

export const useAuth = () => {
  const contexto = useContext(AuthContext);
  if (!contexto) throw new Error("No hay un provider de la autenticacion");
  return contexto;
};

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cargando, setCargando] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
        });
      } else {
        setUser(null);
      }
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, login, logout, user, cargando }}>
      {cargando ? null : children}
    </AuthContext.Provider>
  );
}
