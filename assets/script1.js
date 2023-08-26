// Datos de propiedades en venta
const properties = [
  {
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    nombre: "Casa montaña",
    descripcion: "Desde las alturas todo se ve mejor",
    piezas: 3,
    metros: 200,
  },
  {
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    nombre: "Casa del lago",
    descripcion: "Vistas y experiencia refrescante",
    piezas: 3,
    metros: 160,
  },
  {
    nombre: "Departamento en la ciudad",
    descripcion: "Vida urbana garantizada",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    piezas: 2,
    metros: 100,
  },
  {
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    nombre: "Casa Rodante",
    descripcion: "Vistas panorámicas",
    piezas: 1,
    metros: 60,
  },
  {
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    nombre: "Estudio",
    descripcion: "Departamento studio",
    piezas: 1,
    metros: 70,
  },
  {
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    nombre: "Mansion",
    descripcion: "Espectacular experiencia habitacional",
    piezas: 6,
    metros: 500,
  },
];

function displayProperties(properties) {
  const propertiesContainer = document.getElementById("properties");
  propertiesContainer.innerHTML = "";

  properties.forEach((property) => {
    const propertyDiv = document.createElement("div");
    propertyDiv.classList.add("property");
    propertyDiv.innerHTML = `
              <h3>${property.nombre}</h3>
              <img src="${property.src}" alt="${property.nombre}">
              <p>Descripción: ${property.descripcion}</p>
              <p>Cuartos: ${property.piezas}</p>
              <p>Metros Cuadrados: ${property.metros} m²</p>
          `;
    propertiesContainer.appendChild(propertyDiv);
  });
}

function updateTotalProperties(total) {
  document.getElementById("totalProperties").textContent = total;
}

function filterProperties() {
  const bedroomsFilter = parseInt(document.getElementById("bedrooms").value);
  const sqmetersFilter = parseInt(document.getElementById("sqmeters").value);

  if (isNaN(bedroomsFilter) || isNaN(sqmetersFilter)) {
    alert("Por favor, completar ambos campos para avanzar con la búsqueda.");
    return;
  }

  const filteredProperties = properties.filter((property) => {
    return property.piezas >= bedroomsFilter && property.metros >= sqmetersFilter;
  });

  displayProperties(filteredProperties);
  updateTotalProperties(filteredProperties.length);
}

displayProperties(properties);
