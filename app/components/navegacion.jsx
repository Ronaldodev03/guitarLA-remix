import { Link, useLocation, useNavigation } from "@remix-run/react";
import imagen from "../../public/img/carrito.png";

const Navegacion = () => {
  const location = useLocation();

  const navigation = useNavigation();

  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio{" "}
        {/*     {navigation.location?.pathname === "/" && (
          <div className=" pl-1">
            <div className=" loader"></div>
          </div>
        )} */}
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros{" "}
        {/*  {navigation.location?.pathname === "/nosotros" && (
          <div className=" loader">...</div>
        )} */}
      </Link>
      <Link
        to="/tienda"
        className={location.pathname === "/tienda" ? "active" : ""}
      >
        Tienda
        {/*         {navigation.location?.pathname === "/tienda" && <div>...</div>}
         */}{" "}
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
        {/*         {navigation.location?.pathname === "/blog" && <div>...</div>}
         */}{" "}
      </Link>
      <Link
        to="/carrito"
        className={location.pathname === "/carrito" ? "active" : ""}
      >
        <img src={imagen} alt="imagen carrito" />
        {/*         {navigation.location?.pathname === "/carrito" && <div>...</div>}
         */}{" "}
      </Link>
    </nav>
  );
};

export default Navegacion;
