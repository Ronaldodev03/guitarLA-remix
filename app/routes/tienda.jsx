import ListadoGuitarras from "../components/listadoGuitarras"

/* importing function for getting data */
import { getGuitarras } from "../models/guitarras.server"

import styles from "../styles/guitarras.css"

/* function for meta data, for improving SEO */
export function meta(){
  return([{
    title: "GuitarLA - Tienda de Guitarras",
    description:"Nuestra colección de guitarras",
  }])
  }

/* function for styles */
export function links(){
  return([
    /* IMPORTED FROM ./styles/guittaras.css */    
    {
      rel:"stylesheet",
      href:styles
      },
  ])
}

/* for consuming tha data in the component */
import {useLoaderData} from "@remix-run/react"

/* this loader function excecutes when the component is loaded */
/* in react-router we would asociate this loader with the main function, but here we have SSR and it's not necessary to do that */
/* a model folder was created to fetch the data, the guitarras in this case */
export async function loader() {
const guitarras = await getGuitarras()
return guitarras?.data || null
}

const Tienda = () => {
  /* getting the data from the loader */
  const guitarras = useLoaderData()
    
  return (
    <main className="contenedor">
   <ListadoGuitarras guitarras={guitarras}/>
    </main>
  )
}

export default Tienda