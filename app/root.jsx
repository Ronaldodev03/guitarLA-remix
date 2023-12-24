/* eslint-disable react/prop-types */

/*  we need import Meta for rendering what is in meta function inside Document function */
/*  we need import Links for rendering what is in links function inside Document function */
/**** NOTE: Meta and Links only works in files inside routes folder and here in root, do not work in other files inside other folders like for example components folder *****/
/*  we need import Oulet for rendering the different routes*/
/* Scripst is for getting the optimizations of Remix */
/* LiveReload is for reloading the page after saving changes */
/* useRouteError is for handling errors */
import { Meta ,Links, Outlet, Scripts, LiveReload, useRouteError, Link} from "@remix-run/react"; 

import styles from "./styles/index.css"

import Header from "./components/header"
import Footer from "./components/footer"

import { useState, useEffect } from "react";

/* function for meta data, for improving SEO */
export function meta(){

  return([{
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport:"width=device-width,initial-scale=1"
  }])
}

/* 
****** THIS LINKS COMING FROM GOOGLE FONTS GOES TO links FUNCTION AS FOLLOWS *********
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"></link>
 */

/* function for styles */
/* as it is used in the main funcion (App), this styles will be aplied to all the project */
export function links(){
  return([

    /* LINK FOR NORMALIZED, CSS RESET, IT GOES FIRST */
{
rel:"stylesheet",
href:"https://necolas.github.io/normalize.css/8.0.1/normalize.css"
},

/***** START| COMING FROM GOOGLE FONTS *****/
{
  rel:"preconnect",
  href: "https://fonts.googleapis.com"
},
{
  rel:"preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "true"
},
{
  rel:"stylesheet",
  href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
},
/**** END| COMING FROM GOOGLE FONTS ****/

/* IMPORTED FROM ./styles/index.css */    
{
  rel:"stylesheet",
  href:styles
  },
  ])
}

/* we create this Document function*/
function Document({children}){
  return(
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* header */}
        <Header/>
        
        {children}

        <Footer/>

        {/* scripts has the optimizations of remix */}
        <Scripts/>

        {/* LiveReload is for reloading the page after saving changes */}
        <LiveReload/>
      </body>
    </html>
  )
}

/* main function */
export default function App() {

  /* localStorage */
  const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carritoGuitarLA")) ?? [] : null

  const [carrito, setCarrito] = useState(carritoLS)

  /* localStorage */
  useEffect(() => {
   localStorage.setItem("carritoGuitarLA", JSON.stringify(carrito) )
  }, [carrito])
  

  /* this is called in guitarras.$guitarraUrl.jsx after clicking the button "add to carrito" */
  const agregarCarrito = (guitarra) =>{

    /* iterating over the guitarras in the carrito */
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
      /* guitarra already in the carrito, update */

      /* find the duplicated guitarras */
      const carritoActualizado = carrito.map(guitarraState => {

        if(guitarraState.id===guitarra.id){
          guitarraState.cantidad = guitarra.cantidad
        }

        return guitarraState
        
      })

      /* updating carrito */
      setCarrito(carritoActualizado)

    }else{
      /* new guitarra, add to carrito */
      setCarrito([...carrito,guitarra ])
    }
  }

  /* this will be used in the carrito path */
  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map((guitarraState)=>{
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })

    setCarrito(carritoActualizado)
  }

  /* this will be used in the carrito path */
  const eliminarGuitarra = (id)=>{
    const carritoActualizado = carrito.filter(guitarraState => guitarraState.id != id)
    setCarrito(carritoActualizado)
  }

  return (
    /* Document created below goes here */
<Document>
  <Outlet
  /* passing the state to the context of REMIX */
    context={{
      agregarCarrito,
      carrito,
      actualizarCantidad,
      eliminarGuitarra,
    }}
  />
</Document>
  );
}

/* error page handling */
/* in case of error this is gonna be shown */
export function ErrorBoundary(){
  const error = useRouteError()
  console.log("ERRORRR", error)
  return(
    <Document>
      <div>
      <h1 className=" heading">ERROR</h1> 
      <p className=" error">{error.status} {error.statusText}</p> 
      <Link to="/" className="error-enlace">Volver a pagina principal</Link>
      </div>
    </Document>
)
}  


