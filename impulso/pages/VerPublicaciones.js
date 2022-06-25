import Publicaciones from "../components/Publicaciones";
import AgregarPublicacion from "../components/AgregarPublicacion";
import NavBar from "../components/NavBar";

function VerPublicaciones(props) {
  return (
    <div className="border bg-gray-50 ">
      <NavBar></NavBar>
      <h1 className="text-5xl mb-4 text-amber-600 ml-4">
        <b>Proyectos</b>
      </h1>
      <div className="">
        <div className="">
          <Publicaciones></Publicaciones>
        </div>
      </div>
    </div>
  );
}

VerPublicaciones.propTypes = {};

export default VerPublicaciones;
