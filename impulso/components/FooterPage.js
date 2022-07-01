import React from "react";
import Image from "next/image"; 
import Link from "next/link";

function Footer() {
	return (
		<>
			<div className="DivFooter bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around  p-20">
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6 text-center ">
							Integrantes<span className="text-amber-700"> Buzzer Beaters</span>
						</p>
						<div className="flex gap-6 pb-5 mx-auto">
              <Image className='rounded-2xl' src='/fotoGrupal.jpeg' alt='Foto Grupal TDUCK' width={350} height={200}></Image>
						</div>
					</ul>
				</div>
				<div className="p-5 max-w-md text-justify items-start">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Contacto</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <Link href='https://github.com/Yossu502'> Josue Mendez 16585-18</Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <Link href='https://github.com/JnyAlx100'> Jonathan Martinez 15955-18</Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <Link href='https://github.com/Alejndro22'> Douglas Queme 15773-18</Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              <Link href='https://github.com/geovannysalvador'> Geovanny Tecum 15065-18</Link>
						</li>
					</ul>
				</div>
				<div className="p-5 max-w-md text-justify">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Organizacion</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
							Universidad Rafael Landivar Campus San Alberto Hurado, S. J. de Quetzaltenango
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-600 cursor-pointer">
              Estudiantes de Ingenieria en Informatica y Sistemas
						</li>
					</ul>
				</div>
			</div>
			<div className="DivFooter flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2021-2022 Derechos Reservados | Construido con ❤ por <span className="text-amber-700"> Buzzer Beaters </span>
				</h1>
			</div>
		</>
	);
}

export default Footer;