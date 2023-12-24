/* .server => will only execute in the server */

/* function for getting data */
export async function getGuitarras(){
    try {
        const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
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

/* function for getting a single guitarra based on url param */
/* this will be called in routes/guitarras.$guitarraUrl.jsx */
export async function getGuitarra(url){
  try {
      const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
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