/* .server => will only execute in the server */

/* function for getting data */
export async function getPosts(){
    try {
        const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
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

/* function for getting a single post based on url param */
/* this will be called in routes/posts.$guitarraUrl.jsx */
export async function getPost(url){
  try {
      const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
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