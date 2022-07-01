import { React, useState, useEffect } from "react";
import { db } from "../firebase/client.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {
  BiCalendar,
  BiMessageAltDetail,
  BiLinkExternal,
  BiLocationPlus,
} from "react-icons/bi";
import EliminarPublicacion from "../components/EliminarPublicacion";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";

export default function Publicaciones() {
  const { user } = useAuth();
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
    });
  }, []);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-3 gap-4 mx-4">
      {publicaciones.length === 0 ? (
        <p>No hay publicaciones</p>
      ) : (
        publicaciones.map((publicacion) => (
          <div
            className="bg-white break-inside-avoid rounded-lg mb-4 text-left justify-between h-40 w-auto border border-amber-600 shadow-md col-span-1 "
            key={publicacion.id}
          >
            <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 p-2">
              <div className="col-span-1 w-full relative ">
                <Image
                  src={publicacion.imagen}
                  alt="titulo"
                  layout="fill"
                  className="rounded-lg "
                ></Image>
              </div>
              <div className="col-span-3 lg:col-span-4 xl:col-span-5">
                <div className="flex place-items-center justify-between">
                  <h2 className="text-amber-600 text-2xl truncate">
                    {publicacion.titulo}
                  </h2>
                  {user.uid == publicacion.autor ? (
                    <EliminarPublicacion
                      className="mr-4 "
                      id={publicacion.id}
                    />
                  ) : null}
                </div>
                <div className="place-items-center flex">
                  <BiCalendar className="mr-2 shrink-0"></BiCalendar>
                  <p className="text-slate-600 truncate">
                    {publicacion.createdAt.toDate().toDateString()}
                  </p>
                </div>
                <div className="place-items-center flex">
                  <BiLinkExternal className="mr-2 shrink-0"></BiLinkExternal>
                  <a
                    href={publicacion.enlace}
                    className="truncate"
                    target="_blank"
                  >
                    {publicacion.enlace}
                  </a>
                </div>
                <div className="place-items-center flex">
                  <BiLocationPlus className="mr-2 shrink-0"></BiLocationPlus>
                  <p className="truncate">{publicacion.ubicacion}</p>
                </div>
                <div className="flex">
                  <BiMessageAltDetail className="mr-2 shrink-0 mt-1"></BiMessageAltDetail>
                  <p className="truncate">{publicacion.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
