import { async } from "@firebase/util";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { db, storage } from "../firebase/client";

export default function EliminarPublicacion({ id }) {
  const procesoEliminar = async () => {
    try {
      await deleteDoc(doc(db, "Publicaciones", id));
      console.log("El articulo se ha eliminado exitosamentemente");
    } catch (error) {
      console.log("Ha ocurrido un error: " + error);
    }
  };

  return (
    <div>
      <button
        className="border border-amber-600 text-amber-600 hover:bg-rose-600 hover:text-white font-bold py-2 px-4 rounded"
        onClick={procesoEliminar}
      >
        Eliminar
      </button>
    </div>
  );
}
