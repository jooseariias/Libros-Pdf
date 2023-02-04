const rest =document.querySelector(".contenedor")

const LibrosAdolecentes =[
    {
        id:24,
        Nombre:"Montaña",
        Archivo:"https://www.mediafire.com/file/ycrchdwdcxk7zc8/03._En_las_Monta%25C3%25B1as_de_la_Locura_Autor_H._P._Lovecraft.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485850/imagenes%20libros/adolecentes/monta%C3%B1a_n0zjrp.jpg"
    },
    {
        id:25,
        Nombre:"El A nacro",
        Archivo:"https://www.mediafire.com/file/hsel1depb21md05/01._El_Anacron%25C3%25B3pete_Autor_Enrique_Gaspar_y_Rimbau.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485850/imagenes%20libros/adolecentes/elanacrono_a0uv3n.jpg"
    },
    {
        id:26,
        Nombre:"El Dieblo",
        Archivo:"https://www.mediafire.com/file/tct4acwlhmcfx6f/02._El_Diablo_Enamorado_Autor_Jacques_Cazotte.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675485849/imagenes%20libros/adolecentes/el_diablo_w065om.jpg"
    },
]


LibrosAdolecentes.forEach(item => {
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