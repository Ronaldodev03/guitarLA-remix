/* eslint-disable react/prop-types */
import {Link} from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"
const Post = ({post}) => {
    const {contenido, imagen, titulo, url, publishedAt}=post
    const fecha = formatearFecha(publishedAt)
    
    return (
    <article className="post">
        <img className="imagen" src={imagen?.data.attributes.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className=" fecha">{fecha}</p>
            <p className=" resumen">{contenido}</p>
            {/* dynamic route, file routes/posts.$postUrl.jsx */}
            <Link className=" enlace" to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

export default Post