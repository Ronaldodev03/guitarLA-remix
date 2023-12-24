/* eslint-disable react/prop-types */
import Guitarra from "./guitarra"

const ListadoGuitarras = ({guitarras}) => {
  return (
    <>
      <h2 className="heading">Nuestra Coleccion</h2>
          {!Array.isArray(guitarras) ? (<p>Cargando...</p>) : (
          <div className="guitarras-grid">
                {guitarras.map((guitarra) => (
                    <Guitarra 
                    key={guitarra?.id}
                    guitarra={guitarra}
                    />
                ))}
          </div>
      )}
    </>
  )
}

export default ListadoGuitarras