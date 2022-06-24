import React from "react";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";

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
      <Image
        src={user.photo == null ? "/account_circle.png" : user.photo}
        alt="Foto del logo"
        width={48}
        height={48}
      ></Image>

      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  );
};

export default PruebaMain;
