const rest =document.querySelector(".contenedor")

const LibrosCYN =[
    {
        id: 29,
        Nombre: "Madame",
        Archivo:
          "https://www.mediafire.com/file/66nnjaaie997ji7/03._Madame_Bovary_Autor_Gustave_Flaubert.pdf/file",
        image:
          "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485898/imagenes%20libros/cuentos%20y%20novelas/madamebovary_oqjabc.jpg",
      },{
        id: 30,
        Nombre: "Rojo Y Vivo",
        Archivo:
          "https://www.mediafire.com/file/un6xrx955dm4xsi/08._Rojo_y_Negro_Autor_Sdenthal.pdf/file",
        image:
          "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485886/imagenes%20libros/cuentos%20y%20novelas/rojo_y_vivo_czsd7i.jpg"
      },{
        id: 31,
        Nombre: "Retrato",
        Archivo:
          "https://www.mediafire.com/file/v3nt2f6wtti0dad/01._Retrato_de_una_dama_Autor_Henry_James.pdf/file",
        image:
          "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485886/imagenes%20libros/cuentos%20y%20novelas/retrato_stijtb.webp",
      },{
        id: 32,
        Nombre: "Emma",
        Archivo:
          "https://www.mediafire.com/file/8p9pjh9dytfvzxm/04._Emma_Autor_Jane_Austen.pdf/file",
        image:
          "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485886/imagenes%20libros/cuentos%20y%20novelas/emma_zmlq3x.jpg",
      },{
        id: 33,
        Nombre: "Maria Jorge",
        Archivo:
          "https://www.mediafire.com/file/7dlr5rmf7jfi4kt/02._Mar%25C3%25ADa_Autor_Jorge_Isaacs.pdf/file",
        image:
          "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485886/imagenes%20libros/cuentos%20y%20novelas/maria_jorge_nuddwj.jpg",
      },{
        id: 34,
        Nombre: "Persuacion",
        Archivo:
          "https://www.mediafire.com/file/ifnf0czod7b9uyk/06._Persuasi%25C3%25B3n_Autor_Jane_Austen.pdf/file",
        image:
          "https://res.cloudinary.com/dmxriftxk/image/upload/v1675485886/imagenes%20libros/cuentos%20y%20novelas/pesuasion_jane_kk8sne.jpg",
      },
]


LibrosCYN.forEach(item => {
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