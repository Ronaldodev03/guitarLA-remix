/* .server => will only execute in the server */

/* function for getting data */
export async function getCurso(){``
    try {
        const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
        if (!respuesta.ok) {
          throw new Error(`HTTP error! Status: ${respuesta.status}`);
        }
        const resultado = await respuesta.json();
        return resultado;
      } catch (error) {
        console.error("Error fetching data:", error);
        return { error: "Error fetching data" };
      }
}