import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { signUp } = useAuth();
  const [error, setError] = useState();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(data.email, data.password);
      // Ir a pagina principal
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}>
          <div>
            <h5>Correo</h5>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ingrese su correo"
              required
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <h5>Contraseña</h5>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese la contraseña"
              required
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
