import React from 'react'
import Image from 'next/image'
import Link from "next/link"

function Login() {
  return (
    <div className="General">
            <div className="divRojo">
            
            </div>
            <div className="divImg">

            </div>
            <div className="divImgArriba"> 
            
            </div>
            <div className="divAzul">

            </div>
            <div className="divFormulario">
                <div className="divFormulario__input">
                    <form>
                        <h1>Login to your account</h1>
                        <label>Usuario</label><br></br>
                        <input type='text'></input>
                        <br></br>
                        <label>contraseña</label><br></br>
                        <input type='password' ></input><br></br>
                    </form>
                    <label className="divFormulario__label">¿Olvidaste tu contraseña?</label>
                    <button className="divFormulario__btn">Iniciar Sesion</button>
                    <div className="divFormulario__register">
                        <label>
                            Unicamente tenemos inicio de Sesion  <Link href='/SignUp' passHref><a>Con Google</a></Link>
                        </label>
                        <button className="divFormulario__btngoogle">Registrate con Google</button>
                    </div>
                </div>
            </div>
            <div className="divLogoRojo">
                <Link href='/' passHref>
                    <Image src='/rocket.png' alt='Foto del logo' width={800} height={800}></Image>
                </Link>
            </div>
            <div className="divLogoAzul">
                <Link href='/' passHref>
                    <Image src='/rocket.png' alt='Foto del logo' width={800} height={800}></Image>
                </Link>
            </div> 
        </div> 
  )
}

export default Login