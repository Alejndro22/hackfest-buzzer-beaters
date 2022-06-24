import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import BurguerButton from './BurguerButton'

function NavBar() {
  return (
    <nav className='NavBarComponent'>
      <div className='General_Container'>
        <ul className='General_Container__ListPages'>
          <li className='links'>
            <Link href='' passHref>
              <a>Explorar</a>
            </Link>
          </li>
          <li className='links'>
            <Link href='#comofunciona' passHref>
              <a>Cómo Funciona</a>
            </Link>
          </li>
          <li>
            <Link href='' passHref>
              <Image src='/logo.png' alt='logo de la empresa' layout='fixed' width={200} height={200} className='imageLogo'></Image>
            </Link>
          </li>
          <li className='links'>
            <Link href='#ObjetivoODS' passHref>
              <a>Objetivo 9 ODS</a>
            </Link>
          </li>
          <li className='links'>
            <Link href='/LoginPagina' passHref>
              <a>Iniciar Sesion</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='burguer'>
        <BurguerButton></BurguerButton>
      </div>
    </nav>
  )
}

export default NavBar