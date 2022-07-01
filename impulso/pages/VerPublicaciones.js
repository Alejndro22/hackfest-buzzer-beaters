import Publicaciones from "../components/Publicaciones";
import AgregarPublicacion from "../components/AgregarPublicacion";
import NavBarResponsive from "../components/NavBarResponsive";
import Footer from "../components/FooterPage";

function VerPublicaciones(props) {
  return (
    <div className="DivPublicaciones bg-gray-50 h-full">
      <NavBarResponsive className="flex"></NavBarResponsive>
      <h1 className="text-5xl mb-4 text-amber-600 ml-16">
        <b>Proyectos</b>
      </h1>
      <div className="">
        <div className="mx-10">
          <Publicaciones></Publicaciones>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

VerPublicaciones.propTypes = {};

export default VerPublicaciones;
