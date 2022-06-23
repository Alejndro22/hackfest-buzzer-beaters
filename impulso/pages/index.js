import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../componentes/NavBar'
import styles from '../styles/Home.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


export default function Home() {

  const {ref, inView} = useInView({
    threshold: 0.1
  })
  const animation = useAnimation()

  useEffect(() =>{
    console.log(inView);
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
    }
    if(!inView){
      animation.start({x: '-100vw'})
    }
  }, [inView, animation])

  return (
    <div className={styles.container}>
      <Head>
        <title>Impulso GT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/rocket.svg" />
      </Head>
      <NavBar></NavBar>
      
      <div className="parent">
        <div className="div1">
          <h1>Impulsa tu proyecto a <br></br> otro nivel</h1>
        </div>
        <div className="div2">
          <button>Publica tu proyecto</button>
        </div>
        <div className="div3">
          <Link href='' passHref>
            <Image src='/imagepage.jpg' alt='Foto de inicio' width={490} height={550}></Image>
          </Link>
        </div>
      </div>
      <div ref={ref}>
        <motion.div className='funcionamiento' name='comofunciona'
        animate= {animation}
        >
          <h2>
            Cómo funciona
          </h2>
          <div>
            <p>
              La idea principal del proyecto IMPULSA es que jóvenes empresarios guatemaltecos puedan contar con un sitio web para postear sus ideas que les permita tener visibilidad en sus proyectos, esto en base al Objetivo 9: Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación. Se buscaría que los visitantes como tu o yo del sitio puedan navegar y descubrir proyectos que les llamen la atención e informarse del objetivo y plan que se tiene en cada uno, y en caso de querer apoyar ya sea intelectualmente o económicamente que puedan disponer de la información de contacto.
            </p>
          </div>
        </motion.div> 
     


      <motion.div className='ObjetivoNoveno' name='ObjetivoODS'
      animate= {animation}
      >
        <h2>Objetivo noveno de Desarrollo Sostenible </h2>
        <div>
          <p>
          Objetivo 9: Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación.
          <br></br><br></br>
          La industrialización inclusiva y sostenible, junto con la innovación y la infraestructura, pueden dar rienda suelta a las fuerzas económicas dinámicas y competitivas que generan el empleo y los ingresos. Estas desempeñan un papel clave a la hora de introducir y promover nuevas tecnologías, facilitar el comercio internacional y permitir el uso eficiente de los recursos.
          <br></br><br></br>
          La innovación y el progreso tecnológico son claves para descubrir soluciones duraderas para los desafíos económicos y medioambientales, como el aumento de la eficiencia energética y de recursos. A nivel mundial, la inversión en investigación y desarrollo (I+D), como porcentaje del PIB, aumentó de un 1,5 % en el 2000 a un 1,7 % en el 2015, y continuó casi en el mismo nivel en el 2017. Sin embargo, en las regiones en desarrollo fue inferior al 1 %.
          </p>
        </div>
      </motion.div>


      <motion.div className='MetasObjetivo' name='ObjetivoODS'
      animate= {animation}
      >
        <h2>Metas principales del Objetivo </h2>
        <div>
          <ul>
            <li>
              Desarrollar infraestructuras fiables, sostenibles, resilientes y de calidad, incluidas infraestructuras regionales y transfronterizas, para apoyar el desarrollo económico y el bienestar humano, haciendo especial hincapié en el acceso asequible y equitativo para todos
            </li>
            <li>
              Promover una industrialización inclusiva y sostenible y, de aquí a 2030, aumentar significativamente la contribución de la industria al empleo y al producto interno bruto, de acuerdo con las circunstancias nacionales, y duplicar esa contribución en los países menos adelantados.
            </li>
            <li>
              Aumentar el acceso de las pequeñas industrias y otras empresas, particularmente en los países en desarrollo, a los servicios financieros, incluidos créditos asequibles, y su integración en las cadenas de valor y los mercados.
            </li>
            <li>
              De aquí a 2030, modernizar la infraestructura y reconvertir las industrias para que sean sostenibles, utilizando los recursos con mayor eficacia y promoviendo la adopción de tecnologías y procesos industriales limpios y ambientalmente racionales, y logrando que todos los países tomen medidas de acuerdo con sus capacidades respectivas.
            </li>
            <li>
              Aumentar la investigación científica y mejorar la capacidad tecnológica de los sectores industriales de todos los países, en particular los países en desarrollo, entre otras cosas fomentando la innovación y aumentando considerablemente, de aquí a 2030, el número de personas que trabajan en investigación y desarrollo por millón de habitantes y los gastos de los sectores público y privado en investigación y desarrollo.
            </li>
          </ul>
        </div>
      </motion.div>  
      </div>
    </div>
  );
}
