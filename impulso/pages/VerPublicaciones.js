import Publicaciones from "../components/Publicaciones";
import AgregarPublicacion from "../components/AgregarPublicacion";

function VerPublicaciones(props) {
  return (
    <div className="principal ">
      <div className="tituloGeneeral">
        <h1>
          <b>Publicaciones</b>
        </h1>
      </div>
      <div className="contenedorGeneral">
        <div className="contenedorPost">
          <Publicaciones></Publicaciones>
        </div>
        <div className="contenedorAgregar">
          <AgregarPublicacion></AgregarPublicacion>
        </div>
      </div>
    </div>
  );
}

VerPublicaciones.propTypes = {};

export default VerPublicaciones;
