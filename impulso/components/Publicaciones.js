import { React, useState, useEffect } from "react";
import { db } from "../firebase/client.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Image from "next/image";

export default function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const publicacionReferencia = collection(db, "Publicaciones");
    const q = query(publicacionReferencia, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const publicaciones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPublicaciones(publicaciones);
      console.log(publicaciones);
    });
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4">
      {publicaciones.length === 0 ? (
        <p>No hay publicaciones</p>
      ) : (
        publicaciones.map((publicacion) => (
          <div
            className="bg-white break-inside-avoid rounded-lg mb-8 text-left justify-between h-64 w-auto border border-amber-600 shadow-md col-span-1 mx-4"
            key={publicacion.id}
          >
            <div className="">
              <div className="ContenedorImagen">
                <Image
                  src={publicacion.imagen}
                  alt="titulo"
                  width="100px"
                  height="100px"
                ></Image>
              </div>
              <div className="contenedorLetras">
                <h2>{publicacion.titulo}</h2>
                <p>{publicacion.createdAt.toDate().toDateString()}</p>
                <h4>{publicacion.descripcion}</h4>
                <h4>{publicacion.enlace}</h4>
                <h4>{publicacion.ubicacion}</h4>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
