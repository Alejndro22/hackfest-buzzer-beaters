import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import NavBarResponsive from "../components/NavBarResponsive";

function Login() {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { user, login, googleLogin } = useAuth();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(data.email, data.password);
      // Ir a pagina principal
      router.push("/");
    } catch (error) {
      setError(error.code);
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta");
        console.log(error);
      } else {
      }
    }
  };

  const handleSignInGoogle = async () => {
    setError("");
    try {
      await googleLogin();
      // Ir a pagina principal
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // <div className="grid h-screen place-items-center">
    <>
      <NavBarResponsive className="flex"></NavBarResponsive>
      <div className="flex justify-center">
        <div className="General -mt-8">
          <div className="divRojo"></div>
          <div className="divImg"></div>
          <div className="divImgArriba"></div>
          <div className="divAzul"></div>
          <div className="divFormulario">
            <div className="divFormulario__input">
              <form onSubmit={handleLogin}>
                <h1>Login to your account</h1>
                <label>Usuario</label>
                <br></br>
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
                ></input>
                <br></br>
                <label>Contraseña</label>
                <br></br>
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
                ></input>
                <br></br>

                <label className="divFormulario__label">
                  <Link href="/SignUp" passHref>
                    <a>¿No tienes una cuenta? Registrate con correo</a>
                  </Link>
                </label>
                <button className="divFormulario__btn" type="submit">
                  Iniciar Sesión
                </button>
              </form>
              <div className="divFormulario__register">
                <label className="LabelFInal">
                  También puedes iniciar sesion{" "}
                  <Link href="/SignUp" passHref>
                    <a>con Google</a>
                  </Link>
                </label>
                <button
                  className="divFormulario__btngoogle"
                  onClick={handleSignInGoogle}
                >
                  Inicia sesión con Google
                </button>
              </div>
            </div>
          </div>
          <div className="divLogoRojo">
            <Link href="/" passHref>
              <Image
                src="/rocket.png"
                alt="Foto del logo"
                width={800}
                height={800}
              ></Image>
            </Link>
          </div>
          <div className="divLogoAzul">
            <Link href="/" passHref>
              <Image
                src="/rocket.png"
                alt="Foto del logo"
                width={800}
                height={800}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
