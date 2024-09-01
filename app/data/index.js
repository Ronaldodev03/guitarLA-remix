import imgVai from "../../public/guitarras/guitarra_01.jpg";
import imgClapson from "../../public/guitarras/guitarra_02.jpg";
import imgPage from "../../public/guitarras/guitarra_03.jpg";
import imgBeck from "../../public/guitarras/guitarra_04.jpg";
import imgTownshend from "../../public/guitarras/guitarra_05.jpg";
import imgBlog1 from "../../public/blog/blog_1.jpg";
import imgBlog2 from "../../public/blog/blog_2.jpg";
import imgBlog3 from "../../public/blog/blog_3.jpg";
import imgCurso from "../../public/cursos/cursos_bg.jpg";

export const guitarras = {
  attributes: [
    {
      id: 1,
      nombre: "Vai",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio: 199.99,
      imagen: imgVai,
      url: "vai",
    },
    {
      id: 2,
      nombre: "Clapson",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio: 299.99,
      imagen: imgClapson,
      url: "clapson",
    },
    {
      id: 3,
      nombre: "Page",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio: 149.99,
      imagen: imgPage,
      url: "page",
    },
    {
      id: 4,
      nombre: "Beck",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio: 299.99,
      imagen: imgBeck,
      url: "beck",
    },
    {
      id: 5,
      nombre: "Townshend",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      precio: 399.99,
      imagen: imgTownshend,
      url: "townshend",
    },
  ],
};

export const blog = {
  attributes: [
    {
      id: 1,
      titulo: "5 Tips para avanzar más rapido",
      contenido:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imagen: imgBlog1,
      fecha: "07/02/2024",
      url: "post-01",
    },
    {
      id: 2,
      titulo: "No aprendas a tocar guitarra sin saber esto",
      contenido:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imagen: imgBlog2,
      fecha: "07/03/2024",
      url: "post-02",
    },
    {
      id: 3,
      titulo: "Como elegir tu primera guitarra",
      contenido:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imagen: imgBlog3,
      fecha: "16/03/2024",
      url: "post-03",
    },
  ],
};

export const curso = {
  attributes: [
    {
      titulo: "¡Aprende en tan solo 2 Meses!",
      contenido:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imagen: imgCurso,
    },
  ],
};
