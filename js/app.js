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
  {
    nombre: "Superman",
    descripción:
      "Superman es un superhéroe icónico de DC Comics, también conocido como Kal-El o Clark Kent. Es un ser extraterrestre con poderes sobrehumanos, incluida la fuerza, la velocidad y la capacidad de volar. Utiliza sus habilidades para proteger a la humanidad y luchar contra el mal.",
    fecha_lanzamiento: "1938-06-01",
    foto: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oD94EXP5UDpzhZGhaGslDv6H8pR.jpg",
  },
  {
    nombre: "Wonder Woman",
    descripción:
      "Wonder Woman es una princesa guerrera amazona y uno de los miembros fundadores de la Liga de la Justicia. Dotada con habilidades sobrehumanas y armas mágicas, lucha por la paz, la justicia y la igualdad en el mundo de los hombres.",
    fecha_lanzamiento: "1941-10-01",
    foto: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/js7cN75bbBnNeQScT0jTRfIkTAa.jpg",
  },
  {
    nombre: "Flash",
    descripción:
      "Flash es el nombre de varios superhéroes que poseen la habilidad de moverse a velocidades extraordinarias. El más conocido es Barry Allen, un científico que adquiere sus poderes en un accidente con productos químicos. Utiliza su velocidad para combatir el crimen y proteger Central City.",
    fecha_lanzamiento: "1940-01-01",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuHuT_sbX7IxTsLMxYOAB1r9UjkIylgvCarmyUjJyNLx9JnRntKUenrG9-iPHm7vK_hs&usqp=CAU",
  },
  {
    nombre: "Aquaman",
    descripción:
      "Aquaman es el rey de Atlantis y un superhéroe que posee la habilidad de comunicarse con criaturas marinas y controlar el océano. Utiliza su tridente mágico y sus habilidades acuáticas para proteger tanto la tierra como el mar.",
    fecha_lanzamiento: "1941-11-01",
    foto: "https://media.themoviedb.org/t/p/w440_and_h660_face/7vmFlj87t8IBcaXTJX1sztJwcyR.jpg",
  },
  {
    nombre: "Green Lantern",
    descripción:
      "Green Lantern es el nombre compartido por varios superhéroes que pertenecen al Cuerpo de Green Lanterns, una fuerza policial intergaláctica. Cada Green Lantern usa un anillo de poder que le otorga la capacidad de crear objetos sólidos de luz pura y es un defensor del universo.",
    fecha_lanzamiento: "1940-07-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/qSSFP3va0q2WL2a2DzcdcjVe463.jpg",
  },
  {
    nombre: "Cyborg",
    descripción:
      "Cyborg, también conocido como Victor Stone, es un superhéroe cibernético que es mitad humano y mitad máquina. Después de un terrible accidente, su cuerpo fue reconstruido con tecnología alienígena, otorgándole una variedad de habilidades tecnológicas y físicas sobrehumanas.",
    fecha_lanzamiento: "1980-07-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/wz2BL1qMVqX80NzUBrTSombrwmN.jpg",
  },
  {
    nombre: "Green Arrow",
    descripción:
      "Green Arrow, también conocido como Oliver Queen, es un arquero experto y justiciero urbano que lucha contra el crimen en la ciudad de Star City. Utiliza su habilidad con el arco y flecha, así como una variedad de dispositivos y habilidades de combate cuerpo a cuerpo.",
    fecha_lanzamiento: "1941-11-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/agLhe81u2mIF4i7QZ9CCKJHIUeO.jpg",
  },
  {
    nombre: "Shazam",
    descripción:
      "Shazam es el superhéroe alter ego de Billy Batson, un joven que obtiene sus poderes al decir la palabra mágica '¡Shazam!'. Al hacerlo, se transforma en un adulto con una variedad de habilidades sobrehumanas, incluida la fuerza, la velocidad y la invulnerabilidad.",
    fecha_lanzamiento: "1940-02-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/i6jSpfFY9jclbl9pE0vf00XHXrh.jpg",
  },
  {
    nombre: "Constantine ",
    descripción:
      "John Constantine ha estado en el infierno y ha vuelto. la capacidad de reconocer claramente a los ángeles y a los demonios que andan por la tierra bajo un aspecto humano, Constantine se vio empujado al suicido para escapar de la atormentadora claridad de su visión.",
    fecha_lanzamiento: "2005-18-02",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/9bIvXIAf2i7NRMnrGowMhJJzPuY.jpg",
  },
];

const marvel = [
  {
    nombre: "Spider-Man",
    descripción:
      "Spider-Man, también conocido como Peter Parker, es uno de los superhéroes más icónicos de Marvel Comics. Después de ser picado por una araña radiactiva, adquiere habilidades sobrehumanas, incluida la agilidad, la fuerza y la capacidad de trepar paredes. Lucha contra el crimen mientras equilibra su vida como estudiante y fotógrafo freelance.",
    fecha_lanzamiento: "1962-08-01",
    foto: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg",
  },
  {
    nombre: "Iron Man",
    descripción:
      "Iron Man, también conocido como Tony Stark, es un multimillonario genio inventor que utiliza una armadura de alta tecnología para luchar contra el crimen y proteger al mundo. Stark es el fundador de Stark Industries y un miembro destacado de los Vengadores.",
    fecha_lanzamiento: "1963-03-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/fIvF6VGIFkNsCTgKYXwTX2q1rzF.jpg",
  },
  {
    nombre: "Captain America",
    descripción:
      "Captain America, también conocido como Steve Rogers, es un super soldado y el líder de los Vengadores. Después de recibir un suero experimental durante la Segunda Guerra Mundial, adquiere fuerza, velocidad y agilidad sobrehumanas. Lucha por la justicia y los ideales estadounidenses.",
    fecha_lanzamiento: "1941-03-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/82ucHZ4ioVGiweT1XMl1mUZaodq.jpg",
  },
  {
    nombre: "Thor",
    descripción:
      "Thor es el dios del trueno y un miembro clave de los Vengadores. Viene de Asgard y posee fuerza y resistencia sobrehumanas, así como la capacidad de controlar el clima. Lucha para proteger a los Nueve Reinos y defender la Tierra de amenazas cósmicas.",
    fecha_lanzamiento: "1962-08-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/gPAmH41VpK5UPaNhAiNJePzrL8z.jpg",
  },
  {
    nombre: "Hulk",
    descripción:
      "Hulk, también conocido como Bruce Banner, es un científico que se transforma en una criatura verde gigante con fuerza increíble cuando se enoja. Aunque a menudo es incomprendido y perseguido, Hulk lucha contra las fuerzas del mal y protege a los inocentes.",
    fecha_lanzamiento: "1962-05-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/p4NYZXVtgKf6aiH65QzzkUVJcsd.jpg",
  },
  {
    nombre: "Black Widow",
    descripción:
      "Black Widow, también conocida como Natasha Romanoff, es una espía y una experta en combate mano a mano. Es una agente de S.H.I.E.L.D. y miembro de los Vengadores. A menudo se la ve como una figura enigmática y astuta que lucha por la justicia.",
    fecha_lanzamiento: "1964-04-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/oggEsESyLjVGD7jbIdBfa2hFUrx.jpg",
  },
  {
    nombre: "Doctor Strange",
    descripción:
      "Doctor Strange, también conocido como Stephen Strange, es un hechicero supremo y un maestro de las artes místicas. Anteriormente un cirujano arrogante, Strange aprende las artes místicas después de un accidente que daña sus manos. Protege el multiverso de amenazas místicas.",
    fecha_lanzamiento: "1963-07-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/zHJYRHI5HkQuwLW5KyeXGQ596u7.jpg",
  },
  {
    nombre: "Black Panther",
    descripción:
      "Black Panther, también conocido como T'Challa, es el rey de Wakanda y un valiente guerrero. Lidera su nación con sabiduría y coraje, mientras protege el Vibranium, el metal más preciado de la Tierra. Como Black Panther, lucha por la justicia y la igualdad.",
    fecha_lanzamiento: "1966-07-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/aXmsbVlvLCuBDMxUvpDJdYSAOFQ.jpg",
  },
  {
    nombre: "Captain Marvel",
    descripción:
      "Captain Marvel, también conocida como Carol Danvers, es una ex piloto de la Fuerza Aérea de los Estados Unidos que obtiene poderes sobrehumanos después de un encuentro con una tecnología alienígena. Es una heroína cósmica que lucha para proteger la Tierra y otros planetas.",
    fecha_lanzamiento: "1968-03-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/5SPa7dZ85p54xa7E9tHRmfKq5ce.jpg",
  },
  {
    nombre: "Ant-Man",
    descripción:
      "Ant-Man, también conocido como Scott Lang, es un ladrón y un ingeniero que roba un traje que le otorga la capacidad de encogerse a un tamaño diminuto mientras aumenta su fuerza. Junto con su compañero, la Avispa, lucha contra el crimen y protege el universo.",
    fecha_lanzamiento: "1962-09-01",
    foto: "https://media.themoviedb.org/t/p/w220_and_h330_face/lKHy0ntGPdQeFwvNq8gK1D0anEr.jpg",
  },
];

const cardsDc = document.querySelector(".dcc");
const cardsMarvel = document.querySelector(".cardsMarvel");
const dialogo = document.querySelector(".dialogo");
const cerrarDialog = document.querySelector(".cerrar");

cerrarDialog.addEventListener("click", closeDialo);
crearCard(dc, cardsDc, "dc");
crearCard(marvel, cardsMarvel, "marvel");

function crearCard(objeto, padre, franquisia) {
  const universo = document.querySelector(".universo");
  const tituloFranquisia = document.createElement("h2");
  tituloFranquisia.textContent = franquisia;
  universo.appendChild(tituloFranquisia);

  objeto.forEach((item) => {
    console.log("Estra");
    const card = document.createElement("DIV");
    const foto = document.createElement("IMG");
    const titulo = document.createElement("P");
    const boton = document.createElement("BUTTON");

    card.classList.add("card");
    foto.classList.add("poster");
    foto.src = item.foto;
    titulo.textContent = item.nombre;
    boton.classList.add("btn", franquisia);
    boton.id = item.nombre;
    boton.textContent = "Ver detalles";
    card.appendChild(foto);
    card.appendChild(titulo);
    card.appendChild(boton);
    padre.appendChild(card);
  });
}

const areaDc = document.querySelector(".cards");
const areaMarvel = document.querySelector(".cardsMarvel");
areaDc.addEventListener("click", verDetalle);
areaMarvel.addEventListener("click", verDetalle);

function verDetalle(e) {
  if (e.target.classList.contains("btn")) {
    let franquisia = "";
    const personaje = e.target.id;
    if (e.target.classList.contains("dc")) {
      franquisia = dc;
    } else if (e.target.classList.contains("marvel")) {
      franquisia = marvel;
    }
    getCharacter(personaje, franquisia);
  }
}

function getCharacter(character, franquisia) {
  const personaje = franquisia.find((item) => item.nombre === character);
  console.log(personaje);
  showDescription(personaje);
}

function showDescription(personaje) {
  dialogo.show();
  const foto = document.querySelector(".imgModal");
  const nombre = document.querySelector(".tituloModal");
  const descripcion = document.querySelector(".decripcion");
  const fecha = document.querySelector(".fecha");
  foto.src = personaje.foto;
  nombre.textContent = personaje.nombre;
  descripcion.textContent = personaje.descripción;
  fecha.textContent = personaje.fecha_lanzamiento;
  console.log(personaje.fecha_lanzamiento);
}

function closeDialo() {
  dialogo.close();
}

const seccionMarvel = document.querySelector(".selectDc");
seccionMarvel.addEventListener("click", ocultarDc);

function ocultarDc() {
  cardsMarvel.style.display = "none";
  cardsDc.style.display = "grid";
}

const seccionDc = document.querySelector(".selectMarvel");
seccionDc.addEventListener("click", ocultarMarvel);

function ocultarMarvel() {
  cardsMarvel.style.display = "grid";
  cardsDc.style.display = "none";
}

const input = document.querySelector("#buscador");

input.addEventListener("input", obtenerImput);

function obtenerImput(evento) {
  while (cardsDc.firstChild) {
    cardsDc.removeChild(cardsDc.firstChild);
  }
  while (cardsMarvel.firstChild) {
    cardsMarvel.removeChild(cardsMarvel.firstChild);
  }

  // const cardsDc = document.querySelector(".dcc");
  // const cardsMarvel = document.querySelector(".cardsMarvel");
  console.log(evento.target.value);
  const valor = evento.target.value.toLowerCase();
  const todo = [...dc, ...marvel];
  const resultado = todo.filter((hero) =>
    hero.nombre.toLowerCase().startsWith(valor)
  );
  // console.log(resultado);
  crearCard(resultado, cardsDc, "dc");
  // crearCard(resultado, cardsDc, "all");
}
