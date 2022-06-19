import React from "react";
import { useAuth } from "../context/AuthContext";

const PruebaMain = () => {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>Hola {user.email}</h1>

      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  );
};

export default PruebaMain;
