import { addDoc, collection, enableIndexedDbPersistence, onSnapshot, Timestamp } from 'firebase/firestore'
import {React, useState} from 'react'
import { storage, db } from '../firebase/client'
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage'

export default function AgregarPublicacion() {

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    enlace: "",
    ubicacion: "",
    createdAt: Timestamp.now().toDate(),
    imagen: ""
  })

  const [progreso, setProgreso] = useState(0);

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleImagenChange=(e)=>{
    setFormData({...formData, imagen : e.target.files[0]})
  }

  const handlePublicar=()=>{
    console.log("aqui")
    console.log(formData)
    if (!formData.titulo || !formData.descripcion || !formData.enlace || !formData.ubicacion || !formData.imagen){
      alert("Por favor Llene todos los campos")
      return;
    }

    const storageRefe = ref(storage, `/imagenes/${Date.now()}${formData.imagen.name}`)

    const cargarImagen = uploadBytesResumable(storageRefe, formData.imagen)

    cargarImagen.on("state_changed",
    (snapshot)=>{
      const porcentaje = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgreso(porcentaje);
    },
    (err)=>{
      console.log(err);
    },
    ()=>{
      setFormData({
        titulo:"",
        descripcion:"",
        enlace: "",
        ubicacion: "",
        imagen: ""

      });
       //Aca esta malo hay que revisarlo 
      getDownloadURL(cargarImagen.snapshot.ref)
      .then((url)=>{
        const publicacionReferencia = collection(db, "Publicaciones")
        addDoc(publicacionReferencia,{
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          enlace: formData.enlace,
          ubicacion: formData.ubicacion,
          imagen: url,
          createdAt: Timestamp.now().toDate(),
        })
        .then(()=>{
          //verificar
          //toast('Publicacion agregada', {type: "exitoso"})
          setProgreso(0)
        })
        .catch((err)=>{
          //Verificar
          //toast('Error de publicacion', {type: "error"})
        })
      });
    }
    );

  };

  return (
    <div>
      <h2>Crear Articulo</h2>
      <label htmlFor=''>Titulo</label>
      <input type='text' name='titulo' className='ControlFormulario' value={formData.titulo} onChange={(e)=>handleChange(e)} ></input>

      <label htmlFor=''>Descipcion</label>
      <textarea name='descripcion' className='ControlFormulario' value={formData.descripcion} onChange={(e)=>handleChange(e)} ></textarea>

      <label htmlFor=''>Enlace</label>
      <input type='text' name='enlace' className='ControlFormulario' value={formData.enlace} onChange={(e)=>handleChange(e)} ></input>

      <label htmlFor=''>Ubicacion</label>
      <input type='text' name='ubicacion' className='ControlFormulario' value={formData.ubicacion} onChange={(e)=>handleChange(e)} ></input>

      <label htmlFor=''>Imagen</label>
      <input type='file' name='imagen' accept='imagen/*' className='controlFormulario' onChange={(e)=>handleImagenChange(e)} ></input>

      {progreso === 0 ? null:(
              <div className='progreso'>
              <div className='progresoBarra'>
                50%
              </div>
            </div>
      )}
      

      <button className='Control' onClick={handlePublicar} >Publicar</button>

    </div>
  )
}
