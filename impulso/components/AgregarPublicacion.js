import {
  addDoc,
  collection,
  enableIndexedDbPersistence,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { React, useState } from "react";
import { storage, db } from "../firebase/client";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { useAuth } from "../context/AuthContext";

export default function AgregarPublicacion() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    enlace: "",
    ubicacion: "",
    createdAt: Timestamp.now().toDate(),
    imagen: "",
  });

  const [progreso, setProgreso] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagenChange = (e) => {
    setFormData({ ...formData, imagen: e.target.files[0] });
  };

  const handlePublicar = (e) => {
    e.preventDefault();
    if (
      !formData.titulo ||
      !formData.descripcion ||
      !formData.enlace ||
      !formData.ubicacion ||
      !formData.imagen
    ) {
      alert("Por favor Llene todos los campos");
      return;
    }

    const storageRefe = ref(
      storage,
      `/imagenes/${Date.now()}${formData.imagen.name}`
    );

    const cargarImagen = uploadBytesResumable(storageRefe, formData.imagen);

    cargarImagen.on(
      "state_changed",
      (snapshot) => {
        const porcentaje = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgreso(porcentaje);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          titulo: "",
          descripcion: "",
          enlace: "",
          ubicacion: "",
          imagen: "",
        });
        //Aca esta malo hay que revisarlo
        getDownloadURL(cargarImagen.snapshot.ref).then((url) => {
          const publicacionReferencia = collection(db, "Publicaciones");
          addDoc(publicacionReferencia, {
            titulo: formData.titulo,
            descripcion: formData.descripcion,
            enlace: formData.enlace,
            ubicacion: formData.ubicacion,
            imagen: url,
            autor: user.uid,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              //verificar
              //toast('Publicacion agregada', {type: "exitoso"})
              setProgreso(0);
            })
            .catch((err) => {
              //Verificar
              //toast('Error de publicacion', {type: "error"})
            });
        });
      }
    );
    document.getElementById("upload-files").value = "";
  };

  const handleHide = (e) => {
    var element = document.getElementById("ModalPost");
    if (element.classList.contains("hidden")) {
    } else {
      element.classList.add("hidden");
    }
  };

  return (
    <div
      id="ModalPost"
      className=" overflow-y-auto overflow-x-hidden fixed grid h-screen place-items-center z-50 w-full  md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
        <div className="relative bg-orange-50 rounded-lg shadow bord">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            data-modal-toggle="post-modal"
            onClick={handleHide}
          >
            X
          </button>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 ">
              Publica tu proyecto
            </h3>
            <form
              id="formul"
              className="space-y-6"
              action="#"
              onSubmit={handlePublicar}
            >
              <div>
                <div className="sticky top-4 ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Titulo
                  </label>
                  <input
                    type="text"
                    name="titulo"
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                    value={formData.titulo}
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Descripción
                  </label>
                  <textarea
                    name="descripcion"
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                    value={formData.descripcion}
                    onChange={(e) => handleChange(e)}
                  ></textarea>

                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enlace
                  </label>
                  <input
                    type="text"
                    name="enlace"
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blorangeue-500 focus:border-orange-500 block w-full p-2.5 "
                    value={formData.enlace}
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="ubicacion"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                    value={formData.ubicacion}
                    onChange={(e) => handleChange(e)}
                  ></input>

                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Imagen
                  </label>
                  <input
                    id="upload-files"
                    autoComplete="off"
                    type="file"
                    name="imagen"
                    accept="imagen/*"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                    onChange={(e) => handleImagenChange(e)}
                  ></input>

                  {progreso === 0 ? null : (
                    <div className="progreso">
                      <div className="progresoBarra">50%</div>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handleHide}
              >
                Publicar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
