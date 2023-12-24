/* eslint-disable react/prop-types */

const Curso = ({curso}) => {
    const {contenido, imagen, titulo} = curso
  return (
    <section className="curso">

{/* this is for using the image that comes from the API as background */}
        <style jsx="true">
            {`
            .curso{
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url});
            }
            `}
        </style>

        <div className="contenedor curso-grid">
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className="texto">{contenido}</p>
            </div>
        </div>
    </section>
  )
}

export default Curso