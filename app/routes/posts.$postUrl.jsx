/* for consuming tha data in the component */
import {useLoaderData} from "@remix-run/react"

/* importing function for getting data */
import { getPost } from "../models/posts.server"

import styles from "../styles/blog.css"

import { formatearFecha } from "../utils/helpers"


/* function for meta data, for improving SEO */
/* NOTE: once the loader pass the info to the component we get available the data parameter */
 export function meta({data}){

  if(!data){
    return{
       title: "GuitarLA - Entrada no encontrada",
       description:"Guitarras, venta de guitarras, entrada no encontrada",
    }
  }

  return([{
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description:`Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`,
  }])
  } 

/* function for styles */
export function links(){
  return([
    /* IMPORTED FROM ./styles/blog.css */    
    {
      rel:"stylesheet",
      href:styles
      },
   
  ])
}


/* this loader function excecutes when the component is loaded */
/* in react-router we would asociate this loader with the main function, but here we have SSR and it's not necessary to do that */
/* a model folder was created to fetch the data, the posts in this case */
export async function loader({params}){
const {postUrl}=params

const post = await getPost(postUrl)

/* return this in case no data is gotten */
 if(post.data.length ===0){
  throw new Response("",{
    status:404,
    statusText:"Entrada no encontrada"
  })
} 

return post
}

const Post = () => {
  const post = useLoaderData()
  const{titulo, contenido, imagen, publishedAt}=post.data[0].attributes
  const fecha = formatearFecha(publishedAt)

  return (
    <article className=" contenedor post mt-3">
        <img className="imagen" src={imagen?.data?.attributes.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className=" fecha">{fecha}</p>
            <p className=" texto">{contenido}</p>
        </div>
      </article>
  )
}

export default Post