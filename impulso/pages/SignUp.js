import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import NavBarResponsive from "../components/NavBarResponsive";

const SignUp = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { signUp, googleLogin } = useAuth();
  const [error, setError] = useState();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(data.email, data.password);
      // Ir a pagina principal
      router.push("/");
    } catch (error) {
      setError(error);
      console.log(error.code);

      if (error.code === "auth/weak-password") {
        alert("Contraseña muy débil, por favor use 6 dígitos");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Correo ya fue registrado");
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
    <>
      <NavBarResponsive className="flex"></NavBarResponsive>
      <div className=" grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-7 md:gap-4 place-content-center justify-items-center content-center mt-8">
        <form
          onSubmit={handleSignUp}
          className="border border-orange-600 rounded-lg w-full md:col-start-2 lg:col-start-3 sm:col-span-1 md:col-span-3"
        >
          <div className="m-16">
            <p className="mb-1 font-serif text-5xl text-orange-600 text-center ">
              SignUp
            </p>
            <div className="text-center mt-6 text-xl">
              ¿Ya tienes una cuenta?
              <Link href="/LoginPagina" passHref>
                <a className="text-amber-600 text-xl"> Inicia sesión</a>
              </Link>
            </div>
            <div class="py-4 mx-16">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div className="my-4">
              <h5 className="text-orange-600 mb-2 text-xl">Correo</h5>
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" Ingrese su correo"
                className="border border-slate-300 h-8 w-full rounded-md"
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
              <h5 className="text-orange-600 mb-2 text-xl">Contraseña</h5>
              <input
                id="password"
                name="password"
                type="password"
                placeholder=" Ingrese la contraseña"
                className="border border-slate-300 h-8 w-full rounded-md"
                required
                onChange={(e) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full mt-8 border border-amber-400 text-amber-400 bg-cyan-700 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded text-sm"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
