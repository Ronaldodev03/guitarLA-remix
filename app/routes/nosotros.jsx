import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"


/* function for meta data, for improving SEO */
export function meta(){
  return([{
    title: "GuitarLA - Sobre Nosotros",
    description:"Venta de guitarras, blog de música",
  }])
  }

/* function for styles */
export function links(){
  return([
    /* IMPORTED FROM ./styles/nosotros.css */    
    {
      rel:"stylesheet",
      href:styles
      },
    /* as soon as html is loaded then this img is gonna load thanks to preload attribute, useful in case the img is too large */
    {
      rel:"preload",
      href:imagen,
      as:"image"
      }
  ])
}

const Nosotros = () => {
  return (
      <main className=" contenedor nosotros">
<h2 className="heading">Nosotros</h2>
<div className="contenido">
    <img src={imagen} alt="imagen nosotros" />
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, suscipit quam! Itaque ipsa accusamus, voluptatem commodi eligendi ullam qui? Voluptatem nesciunt quidem eligendi officiis ipsam quae nisi odio vero vitae.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, suscipit quam! Itaque ipsa accusamus, voluptatem commodi eligendi ullam qui? Voluptatem nesciunt quidem eligendi officiis ipsam quae nisi odio vero vitae.
      </p>
    </div>
</div>
      </main>  
)}

export default Nosotros