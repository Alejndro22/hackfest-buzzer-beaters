import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBarResponsive() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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
      <nav className="NavBR relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" passHref>
              <Image
                src="/logoRecortado.png"
                alt="logo de la empresa"
                layout="fixed"
                width={160}
                height={100}
                priority
                className="imageLogo"
              ></Image>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-black">
                <GiHamburgerMenu />
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/VerPublicaciones" passHref>
                  <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-amber-700 hover:opacity-75">
                    Explorar
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#comofunciona" passHref>
                  <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-amber-700 hover:opacity-75">
                    Cómo Funciona
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#ObjetivoODS" passHref>
                  <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-amber-700 hover:opacity-75">
                    Objetivo 9 ODS
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                {user != null ? null : (
                  <Link href="/LoginPagina" passHref>
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-amber-700 hover:opacity-75">
                      Iniciar Sesion
                    </a>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {user != null ? (
                  <Image
                    src={
                      user.photo == null ? "/account_circle.png" : user.photo
                    }
                    alt="Foto del logo"
                    className="rounded-full"
                    width={48}
                    height={48}
                  ></Image>
                ) : null}
              </li>
              <li className="nav-item">
                {user != null ? (
                  <button
                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-amber-700 hover:opacity-75"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarResponsive;
