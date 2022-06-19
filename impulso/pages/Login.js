import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { user, login } = useAuth();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(data.email, data.password);
      // Ir a pagina principal
      router.push("/PruebaMain");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Logearse</button>
        </form>
      </div>
    </>
  );
};

export default Login;
