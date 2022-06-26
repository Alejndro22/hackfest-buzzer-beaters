import Publicaciones from "../components/Publicaciones";
import AgregarPublicacion from "../components/AgregarPublicacion";
import NavBar from "../components/NavBar";

function VerPublicaciones(props) {
  return (
    <div className=" bg-gray-50 h-full">
      <NavBar></NavBar>
      <h1 className="text-5xl mb-4 text-amber-600 ml-16">
        <b>Proyectos</b>
      </h1>
      <div className="">
        <div className="mx-10">
          <Publicaciones></Publicaciones>
        </div>
      </div>
    </div>
  );
}

VerPublicaciones.propTypes = {};

export default VerPublicaciones;
