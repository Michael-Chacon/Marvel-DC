const dc = [
  {
    nombre: "Batman",
    descripción:
      "Batman es el alter ego de Bruce Wayne, un multimillonario y filántropo que presencia el asesinato de sus padres cuando era niño y jura vengar su muerte, dedicando su vida a luchar contra el crimen en Gotham City.",
    fecha_lanzamiento: "1939-05-01",
    foto: "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg",
  },
  {
    nombre: "Joker",
    descripción:
      "El Joker es un supervillano y archienemigo de Batman. Es un psicópata con una risa incontrolable y un sentido del humor retorcido, que busca sembrar el caos y el terror en Gotham City.",
    fecha_lanzamiento: "1940-04-01",
    foto: "https://i.pinimg.com/originals/43/4e/d7/434ed75cd410bcf8894821f34299cf73.jpg",
  },
  {
    nombre: "Dr. Manhattan",
    descripción:
      "Dr. Manhattan es un personaje de Watchmen, un ser humano que adquiere poderes cuánticos tras un accidente en un reactor nuclear. Posee habilidades sobrehumanas y una percepción del tiempo no lineal.",
    fecha_lanzamiento: "2000-09-01",
    foto: "https://cdnb.artstation.com/p/assets/images/images/038/005/589/large/senal-weerasooriya-dr-man.jpg?1621924886",
  },
  {
    nombre: "Rorschach",
    descripción:
      "Rorschach es un vigilante enmascarado y uno de los personajes principales de Watchmen. Es un detective implacable que opera fuera de la ley, dedicado a hacer justicia a cualquier costo.",
    fecha_lanzamiento: "1986-09-01",
    foto: "https://thecomicbookstore.in/storage/2022/11/TCBS3197.png",
  },
];

const cardsDc = document.querySelector(".dcc");
const dialogo = document.querySelector(".dialogo");
const cerrarDialog = document.querySelector(".cerrar");

cerrarDialog.addEventListener("click", closeDialo);

dc.forEach((item) => {
  const card = document.createElement("DIV");
  const foto = document.createElement("IMG");
  const titulo = document.createElement("P");
  const boton = document.createElement("BUTTON");

  card.classList.add("card");
  foto.classList.add("poster");
  foto.src = item.foto;
  titulo.textContent = item.nombre;
  boton.classList.add("btn");
  boton.id = item.nombre;
  boton.textContent = "Ver detalles";
  card.appendChild(foto);
  card.appendChild(titulo);
  card.appendChild(boton);
  cardsDc.appendChild(card);
});

const clickBtn = document.querySelector(".cards");
clickBtn.addEventListener("click", verDetalle);

function verDetalle(e) {
  if (e.target.classList.contains("btn")) {
    console.log(e.target.id);
    const personaje = e.target.id;
    getCharacter(personaje);
  }
}

function getCharacter(character) {
  const personaje = dc.find((item) => item.nombre === character);
  console.log(personaje);
  showDescription(personaje);
}

function showDescription(personaje) {
  const foto = document.querySelector(".imgModal");
  const nombre = document.querySelector(".tituloModal");
  const descripcion = document.querySelector(".decripcion");
  const fecha = document.querySelector(".fecha");

  dialogo.show();

  foto.src = personaje.foto;
  nombre.textContent = personaje.nombre;
  descripcion.textContent = personaje.descripción;
  fecha.textContent = personaje.fecha_lanzamiento;
  console.log(personaje.fecha_lanzamiento);
}

function closeDialo() {
  dialogo.close();
}
