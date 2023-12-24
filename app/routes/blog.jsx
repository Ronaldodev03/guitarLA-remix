/* importing function for getting data */
import ListadoPosts from "../components/listadoPosts"

import { getPosts } from "../models/posts.server"

import styles from "../styles/blog.css"

/* function for meta data, for improving SEO */
export function meta(){
  return([{
    title: "GuitarLA - Nuestro Blog",
  },
  {
    name:"description",
    content:"GuitarLA, blog de musica y venta de guitarras",
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

/* for consuming tha data in the component */
import {useLoaderData} from "@remix-run/react"

/* this loader function excecutes when the component is loaded */
/* in react-router we would asociate this loader with the main function, but here we have SSR and it's not necessary to do that */
/* a model folder was created to fetch the data, the posts in this case */
export async function loader() {
const posts = await getPosts()
return posts?.data || null
}

const Blog = () => {
  const posts = useLoaderData()

  return (
    <main className="contenedor">
     <ListadoPosts posts={posts}/>
    </main>
  )
}

export default Blog