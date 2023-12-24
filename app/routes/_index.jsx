/* for consuming tha data in the component */
import {useLoaderData} from "@remix-run/react"

/* importing function for getting data */
import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/posts.server"
import { getCurso } from "../models/curso.server"

import stylesGuitarras from "../styles/guitarras.css"
import stylesBlog from "../styles/blog.css"
import stylesCurso from "../styles/curso.css"

import ListadoGuitarras from "../components/listadoGuitarras"
import ListadoPosts from "../components/listadoPosts"
import Curso from "../components/curso"

/* function for meta data, for improving SEO */
export function meta(){
  return([{
    title: "GuitarLA - Inicio",
  },
  {
    name:"description",
    content:"Venta de guitarras, blog de música",
  }])
  }

/* function for styles */
export function links(){
  return([
    {
      rel:"stylesheet",
      href:stylesGuitarras
      },
      {
        rel:"stylesheet",
        href:stylesBlog
        },
        {
          rel:"stylesheet",
          href:stylesCurso
          },
  ])
}

/* this loader function excecutes when the component is loaded */
/* in react-router we would asociate this loader with the main function, but here we have SSR and it's not necessary to do that */
export async function loader(){  
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  
  /* return this in case no data is gotten */
/*    if(posts.data.length ===0 || guitarras.data.length ===0 || curso.data.length ===0){
    throw new Response("",{
      status:404,
      statusText:"Entrada no encontrada"
    })
  }  */
  
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  }
  }

const Index = () => {
  const {guitarras, posts, curso} = useLoaderData()
  
    return (
      <>
     { !guitarras || !posts || !curso ? 
        (<div className=" contenedor">
          <h1 className="heading">Inicio</h1>
          <p>Cargando...</p>
          </div>):
        (<>
          <main className="contenedor">
            <ListadoGuitarras guitarras={guitarras}/>  
          </main>

          <Curso curso={curso.attributes}/>

          <section className="contenedor">
            <ListadoPosts posts={posts}/>
          </section>
        </>) 
      }
      </>
    )
  }
  
  export default Index