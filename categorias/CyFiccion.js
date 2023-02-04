const rest =document.querySelector(".contenedor")

const LibrosCYF = [
  {
    id: 27,
    Nombre: "Gerra De Los Mundos",
    Archivo:
      "https://www.mediafire.com/file/f8l8ngnoy9uugk0/09._La_Guerra_de_los_Mundos_Autor_H.G._Wells.pdf/file",
    image:
      "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485799/imagenes%20libros/ciencia%20f/gerra_de_mundos_ovlriv.jpg",
  },
  {
    id: 28,
    Nombre: "Viaje Al Centro De La Tierra",
    Archivo:
      "https://www.mediafire.com/file/ul21yuwk24nq742/10._Viaje_al_Centro_de_la_Tierra_Autor_Julio_Verne.pdf/file",
    image:
      "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485798/imagenes%20libros/ciencia%20f/viaje-al-centro-de-la-tierra-1864_d2azv2.jpg",
  },
];

LibrosCYF.forEach(item => {
    // Crear elementos de HTML para cada item
    const producto = document.createElement("div");
    producto.innerHTML = `<div class="cont">
      <img class="Imagen" src="${item.image}" alt="${item.Dato}">
      <a class="Link" href="${item.Archivo}">Descargar</a>
   </div>
      `;
  
    // Agregar el producto al contenedor
    rest.appendChild(producto);
  });