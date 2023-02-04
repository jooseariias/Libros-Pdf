const rest =document.querySelector(".contenedor")

const LibrosTerror = [
    
        {
            id:18,
            Nombre:"Frankesten",
            Archivo:"https://www.mediafire.com/file/c4lpfjjgsgm41rq/03._Frankenstein%253B_o_El_Moderno_Prometeo_Autor_Mary_Shelley.pdf/file",
            image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485744/imagenes%20libros/terror/frankesten_oobiiw.jpg"
        },
        {
            id:19,
            Nombre:"El Fantasma De La Opera",
            Archivo:"https://www.mediafire.com/file/0dalez78b6ax8jj/04._El_fantasma_de_la_%25C3%25B3pera_Autor_Gast%25C3%25B3n_Leroux.pdf/file",
            image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485743/imagenes%20libros/terror/el_fantasma_de_la_opera_ijqieo.webp"
        },
        {
            id:20,
            Nombre:"La Isla De Moreau",
            Archivo:"https://www.mediafire.com/file/i5fa22atk27ambh/07._La_Isla_del_Doctor_Moreau_Autor_H._G._Wells.pdf/file",
            image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485743/imagenes%20libros/terror/La_isla_del_Dr_Moreau-452168395-large_d9aaqw.jpg"
        },
        {
            id:21,
            Nombre:"Dracula",
            Archivo:"https://www.mediafire.com/file/16i0une021872ka/05._Dr%25C3%25A1cula_Autor_Bram_Stoker.pdf/file",
            image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485743/imagenes%20libros/terror/dracula_p08wp1.jpg"
        },
        {
            id:22,
            Nombre:"Golem",
            Archivo:"https://www.mediafire.com/file/fxb9w3lmg3xxbf5/02._El_Golem_Autor_Gustav_Meyrink.pdf/file",
            image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485743/imagenes%20libros/terror/golem_dd6jxs.jpg"
        },
        {
            id:23,
            Nombre:"Otra Vuelta",
            Archivo:"https://www.mediafire.com/file/k30ixzs05bt7nm6/01._La_vuelta_de_tuerca_Autor_Henry_James.pdf/file",
            image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485743/imagenes%20libros/terror/otra_vuelta_ddqzpj.jpg"
        },
    
]

LibrosTerror.forEach(item => {
    // Crear elementos de HTML para cada item
    const producto = document.createElement("div");
    producto.innerHTML = `<div class="cont">
      <img class"Imagen" src="${item.image}" alt="${item.Dato}">
      
      <a class="Link" href="${item.Archivo}">Descargar</a>
   </div>
      `;
  
    // Agregar el producto al contenedor
    rest.appendChild(producto);
  });