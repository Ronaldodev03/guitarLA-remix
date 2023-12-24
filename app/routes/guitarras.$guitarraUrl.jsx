
import { useEffect, useState } from "react"

/* for consuming tha data in the component we use useLoaderData */
/* for consuming tha context in the component we use useOuletContex */
import {useLoaderData, useOutletContext} from "@remix-run/react"

/* importing function for getting data */
import { getGuitarra } from "../models/guitarras.server"

import styles from "../styles/guitarras.css"

import carrito from "../../public/img/carrito.png"


/* function for meta data, for improving SEO */
/* NOTE: once the loader pass the info to the component we get available the data parameter */
export function meta({data}){
  if(!data){
    return([{
       title: "GuitarLA - Entrada no encontrada",
       description:"Guitarras, venta de guitarras, guitarra no encontrada",
    }])
  }

  return([{
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description:`Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
  }])
  }

/* function for styles */
export function links(){
  return([
    /* IMPORTED FROM ./styles/guitarras.css */    
    {
      rel:"stylesheet",
      href:styles
      },
  ])
}


/* this loader function excecutes when the component is loaded */
/* in react-router we would asociate this loader with the main function, but here we have SSR and it's not necessary to do that */
/* a model folder was created to fetch the data, the guitarras in this case */
export async function loader({params}){

const {guitarraUrl}=params

const guitarra = await getGuitarra(guitarraUrl)

/* return this in case no data is gotten */
if(guitarra.data.length ===0){
  throw new Response("",{
    status:404,
    statusText:"Guitarra no encontrada"
  })
} 

return guitarra
}

const Guitarra = () => {

  /* this state is for saving how many guitarras the client want to buy */
  const [cantidad, setCantidad] = useState(0)

  const [flagMessage, setFlagMessage] = useState(false)

  /* destructuring this function from the context */
  const {agregarCarrito} = useOutletContext()

  /* taking the data from the loader */
  const guitarra = useLoaderData()

  /* handling the change in the select/form */
  const handleSubmit = (e)=>{
    e.preventDefault()

    if(cantidad<1){
      alert("Debe seleccionar una cantidad")
      return
    }

    /* this data was called in the loader and we are saving the data in an object */
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen?.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    /* add selected guitar to carrito state */
    agregarCarrito(guitarraSeleccionada)

    /* message "guitarra añadida" */
    setFlagMessage(true)
  }

  /* timeOut for "guittara añadida" message */
  useEffect(() => {
    const timeOut = setTimeout(()=>{
      setFlagMessage(false)
    }, 3000)

    return  () => clearTimeout(timeOut)

  }, [flagMessage])

  /* destructuring */
  const {nombre,descripcion,imagen,precio} = guitarra.data[0].attributes

  return (
      <main className=" contenedor guitarra">
          <img className="imagen" src={imagen?.data.attributes.url} alt={`imagen guitarra ${nombre}`} />
          <div className="contenido">
            <h3>{nombre}</h3>
            <p className="texto">{descripcion[0].children[0].text}</p>
            <p className="precio">${precio}</p>

            <form onSubmit={handleSubmit} className=" formulario" >
              <label htmlFor="cantidad"> Cantidad</label>

              <select 
                onChange={e => setCantidad(parseInt(e.target.value))}
                id="cantidad">
                <option value="0">-- seleccione --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input type="submit" value="Agregar al carrito" />
            </form>
            {flagMessage && <div className="message">
              <p>
                Guitarra añadida al carrito
              </p>
              <img src={carrito} alt="imagen carrito" />
            </div>}
          </div>
      </main>
  )
}
export default Guitarra



