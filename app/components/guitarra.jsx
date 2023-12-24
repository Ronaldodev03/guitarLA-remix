/* eslint-disable react/prop-types */
import { Link } from "@remix-run/react"
const Guitarra = ({guitarra}) => {
  return (
    <div className="guitarra">
        <img src={guitarra.attributes.imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${guitarra.attributes.nombre}`} />
        <div className="contenido">
            <h3>{guitarra.attributes.nombre}</h3>
            <p className="descripcion">{guitarra.attributes.descripcion[0].children[0].text}</p>
            <p className="precio">${guitarra.attributes.precio}</p>
            {/* dynamic route, file routes/guitarras.$guitarraUrl.jsx */}
            <Link className="enlace" to={`/guitarras/${guitarra.attributes.url}`}>Ver Producto</Link>
        </div>
    </div>
  )
}

export default Guitarra