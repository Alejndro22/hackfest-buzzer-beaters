import Link from "next/link";
import React from "react";
import Image from "next/image";
import BurguerButton from "../componentes/BurguerButton";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav className="sticky top-0 z-40">
      <div>
        <div className="General_Container">
          <ul className="General_Container__ListPages">
            <li className="links">
              <Link href="" passHref>
                <a>Explorar</a>
              </Link>
            </li>
            <li className="links">
              <Link href="#comofunciona" passHref>
                <a>Cómo Funciona</a>
              </Link>
            </li>
            <li>
              <Link href="" passHref>
                <Image
                  src="/logo.png"
                  alt="logo de la empresa"
                  layout="fixed"
                  width={200}
                  height={200}
                  className="imageLogo"
                ></Image>
              </Link>
            </li>
            <li className="links">
              <Link href="#ObjetivoODS" passHref>
                <a>Objetivo 9 ODS</a>
              </Link>
            </li>
            <li className="links">
              {user != null ? (
                <a>{user.displayName || user.email}</a>
              ) : (
                <Link href="/LoginPagina" passHref>
                  <a>Iniciar Sesion</a>
                </Link>
              )}
            </li>
            <li className="links">
              {user != null ? (
                <Image
                  src={user.photo == null ? "/account_circle.png" : user.photo}
                  alt="Foto del logo"
                  className="rounded-full"
                  width={48}
                  height={48}
                ></Image>
              ) : null}
            </li>
            {user != null ? (
              <button onClick={handleLogout}>Logout</button>
            ) : null}
          </ul>
        </div>
        <div className="burguer">
          <BurguerButton></BurguerButton>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
