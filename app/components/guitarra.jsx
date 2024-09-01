/* eslint-disable react/prop-types */
import { Link } from "@remix-run/react";
const Guitarra = ({ guitarra }) => {
  return (
    <div className="guitarra">
      <img src={guitarra.imagen} alt={`imagen guitarra ${guitarra.nombre}`} />
      <div className="contenido">
        <h3>{guitarra.nombre}</h3>
        <p className="descripcion">{guitarra.descripcion}</p>
        <p className="precio">${guitarra.precio}</p>
        {/* dynamic route, file routes/guitarras.$guitarraUrl.jsx */}
        <Link className="enlace" to={`/guitarras/${guitarra.url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
