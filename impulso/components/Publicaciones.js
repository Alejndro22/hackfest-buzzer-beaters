import { React, useState, useEffect } from "react";
import { db } from "../firebase/client.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import EliminarPublicacion from "../components/EliminarPublicacion";
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
    <div className="grid grid-cols-2 gap-4 mx-4">
      {publicaciones.length === 0 ? (
        <p>No hay publicaciones</p>
      ) : (
        publicaciones.map((publicacion) => (
          <div
            className="bg-white break-inside-avoid rounded-lg mb-4 text-left justify-between h-64 w-auto border border-amber-600 shadow-md col-span-1 "
            key={publicacion.id}
          >
            <div className="grid grid-cols-4 gap-x-4 p-2">
              <div className="col-span-1">
                <Image
                  src={publicacion.imagen}
                  alt="titulo"
                  width="200px"
                  height="200px"
                  className="rounded-lg"
                ></Image>
              </div>
              <div className="col-span-3">
                <h2 className="text-amber-600 text-2xl">
                  {publicacion.titulo}
                </h2>
                <p className="text-slate-600">
                  {publicacion.createdAt.toDate().toDateString()}
                </p>
                <p className="truncate">{publicacion.descripcion}</p>
                <p>{publicacion.enlace}</p>
                <p>{publicacion.ubicacion}</p>
                <EliminarPublicacion id={publicacion.id} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
