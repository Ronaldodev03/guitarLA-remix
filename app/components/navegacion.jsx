import { Link, useLocation } from "@remix-run/react"
import imagen from "../../public/img/carrito.png"

const Navegacion = () => {
    
const location = useLocation()

  return (
    <nav className="navegacion">
    <Link 
    to="/"
    className={location.pathname==="/" ? "active" : ""}
    >
        Inicio
    </Link>
    <Link 
    to="/nosotros"
    className={location.pathname==="/nosotros" ? "active" : ""}
    >
        Nosotros
    </Link>
    <Link 
    to="/tienda"
    className={location.pathname==="/tienda" ? "active" : ""}
    >
        Tienda
    </Link>
    <Link 
    to="/blog"
    className={location.pathname==="/blog" ? "active" : ""}
    >
        Blog
    </Link>
    <Link 
    to="/carrito"
    className={location.pathname==="/carrito" ? "active" : ""}
    >
        <img src={imagen} alt="imagen carrito" />
    </Link>
</nav>
  )
}

export default Navegacion