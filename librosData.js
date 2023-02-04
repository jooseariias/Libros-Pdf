const rest =document.querySelector(".contenedor")

const librosInicio =[
    {
        id:1,
        Nombre:"3 Cuentos_Las mil noches",
        Archivo:"https://www.mediafire.com/file/6ccx8mmney5ypua/3Cuentos_LasMilNoches.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476092/imagenes%20libros/360_p-tres-cuentos-de-las-mil_ds2v2t.jpg"
    },
     {
        id:2,
        Nombre:"antiCristo",
        Archivo:"https://www.mediafire.com/file/ktj06srvkp4q1ms/Anticristo.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476093/imagenes%20libros/anticristo_l2mev6.jpg"
    },
    {
        id:3,
        Nombre:"Asecinato",
        Archivo:"https://www.mediafire.com/file/wrl0r8ov9wkuf38/Asesinato.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476093/imagenes%20libros/asesino_pwnuay.png"
    },

    {
        id:4,
        Nombre:"Caballeria Roja",
        Archivo:"https://www.mediafire.com/file/v3dqhomvq21yq51/CaballeriaRoja_Babel.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476093/imagenes%20libros/cablleria_roja_oo59ro.jpg"
    },

    {
        id:5,
        Nombre:"Constancia",
        Archivo:"https://www.mediafire.com/file/scy3m3lk12g6v83/constancia.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476093/imagenes%20libros/contancia_mtnmzf.jpg"
    },


     {
        id:6,
        Nombre:"Corazon en Tinieblas",
        Archivo:"https://www.mediafire.com/file/v1wy0c931oqrso3/CorazonTinieblas_Conrad.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476095/imagenes%20libros/corazon_tinieblas_tacvd7.jpg"
    },

    {
        id:7,
        Nombre:"Corazon",
        Archivo:"https://www.mediafire.com/file/g14xfcbucla2asp/Corazon_Amicis.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476094/imagenes%20libros/corazon_urpltx.jpg"
    },


     {
        id:9,
        Nombre:"Jardin Cerezos",
        Archivo:"https://www.mediafire.com/file/9tlhu2c7ms9k1qg/JardinCerezos.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476093/imagenes%20libros/585dc8a632e681baacea58c70565bf5a_kmjjt2.jpg"
    },

    {
        id:10,
        Nombre:"Junto a un MUerto",
        Archivo:"https://www.mediafire.com/file/qi5xr0e6oeppraa/JuntoMuerto.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476094/imagenes%20libros/junto_a_un_muerto_bpdkqq.jpg"
    },


     {
        id:11,
        Nombre:"Mujer Lova",
        Archivo:"https://www.mediafire.com/file/de0k4je49w4zm8g/MujerLoba.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476096/imagenes%20libros/mujer_loba_lgzeyf.jpg"
    },

     {
        id:12,
        Nombre:"Noches Blancas",
        Archivo:"https://www.mediafire.com/file/w5vi7ddl8kgmv3e/NochesBlancas.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476096/imagenes%20libros/noche_blanca_trog1u.jpg"
    },

     {
        id:13,
        Nombre:"Pabellon6",
        Archivo:"https://www.mediafire.com/file/zm23u3v0ufoxsbb/Pabellon6.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476096/imagenes%20libros/pabellon_6_qv0vks.jpg"
    },

    {
        id:14,
        Nombre:"Retrato",
        Archivo:"https://www.mediafire.com/file/a9g4tm4ipsykea8/Retrato.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476097/imagenes%20libros/retrato_axye6h.jpg"
    },

    {
        id:15,
        Nombre:"Secreto De Agusta",
        Archivo:"https://www.mediafire.com/file/k8rq8j67uvu5hu2/SecretoAugusta.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476097/imagenes%20libros/secreto_de_agusta_n1uuxh.jpg"
    },

    {
        id:16,
        Nombre:"SidHarta",
        Archivo:"https://www.mediafire.com/file/fjmzvt115choqyx/Siddhartha.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476097/imagenes%20libros/siddarta_v8uxn9.jpg"
    },

    {
        id:17,
        Nombre:"Suicidas",
        Archivo:"https://www.mediafire.com/file/x9y0ptdi1z1use3/Suicidas.pdf/file",
        image:"https://res.cloudinary.com/dmxriftxk/image/upload/v1675476098/imagenes%20libros/suicidas_zwcrsq.jpg"
    },
    

    


 ]


 librosInicio.forEach(item => {
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