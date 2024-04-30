// Afegeix aquí el codi de JS per a la pàgina pokemon.html

// Constant de la Base de la URL
const BASE_URL = "https://pokeapi.co/api/v2/";

// Petició a l'API utilitzant la constant de la base de la URL amb el path específic com a paràmetre
async function getPokemonData(path) {
  // Fem fetch a l'API a l'endpoint especificat al paràmetre path.
  const res = await fetch(`${BASE_URL}${path}`);

  if (res.ok) {
    // Si OK
    const data = await res.json();
    return data;
  }

  // Si no OK
  throw new Error("Something went wrong.");
}

// Fes una funció que faci una petició a l'API per a obtenir informació d'un Pokémon concret.
// La funció ha de rebre un paràmetre amb l'ID del Pokémon i ha de retornar un objecte amb la següent informació (tal i com la obteniu de l'API):
async function getPokemonInfo(id) {
  // Fem la crida a l'API mitjançant el mètode creat anteriorment, amb l'endpoint i la ID del Pokemon que es vulgui.
  const data = await getPokemonData(`pokemon/${id}`);

  try {
    console.log(data);

    // Per cada abilitat que tingui el Pokemon, n'agafem el nom de la mateixa i els guardem a la variable abilities.
    const abilities = data.abilities.map((e) => {
      return e.ability.name;
    });

    // Agafem totes les URLs dels Sprites dels Pokemons.
    const sprites = data.sprites;
    for (const sprite in sprites) {
      // Guardem el valor de cada Sprite. (L'URL)
      let spriteURL = sprites[sprite];
    }

    // Generem l'objecte Pokemon amb la informació necessària...
    const pokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      abilitats: abilities,
      sprites: sprites,
    };

    console.log(pokemon);

    // Retornem l'objecte Pokemon amb la informació necessària amb key i values.
    return pokemon;
  } catch (error) {
    // Si hi ha error... el mostrem.
    console.error("ERROR: ", error);
  }
}

async function displayPokemonInfo(id) {
  // Esperem a que la funció ens retorni la informació del Pokemon que correspon a l'ID.
  const data = await getPokemonInfo(id);

  // Agafem els elements a emplenar que ja estan creats a l'HTML i els emplenem amb la informació corresponent.
  const name = document.getElementById("name");
  name.innerHTML = `Name: ${data.name}`;

  const height = document.getElementById("height");
  height.innerHTML = `Height: ${data.height}`;

  const weight = document.getElementById("weight");
  weight.innerHTML = `Weight: ${data.weight}`;

  // ABILITIES ===

  // Seleccionem el div que ja existeix dins l'HTML
  const abilities = document.getElementById("abilities");

  // Netejem el que hi havía abans...
  abilities.innerHTML = "";

  // Creem el títol
  const h3 = document.createElement("h3");
  h3.innerHTML = "Abilities";
  h3.classList.add("text-lg", "font-bold", "mb-2");
  abilities.appendChild(h3);

  // Creem l'element ul que contindra les abilities.
  const ul = document.createElement("ul");

  // Inserim l'element ul dins l'element de div anterior.
  abilities.appendChild(ul);

  // Per cada ability generarem un li diferent...
  data.abilitats.forEach((abilitat) => {
    // Creem un nou li
    const li = document.createElement("li");

    // L'inserim a l'element ul anterior.
    ul.appendChild(li);

    console.log(abilitat);

    // Creem l'elemnt h4 que contindrà el nom de l'ability.
    const abilityName = document.createElement("h4");

    // Inserim el valor (El nom de l'ability)
    abilityName.innerHTML = `· ${abilitat}`;

    // Inserim l'elemnt abilityName dins l'li anterior.
    li.appendChild(abilityName);
  });
  // ===

  // Mostrem l'sprite a de la posició 5 on surten de cara.
  const img = document.getElementById("sprite");
  img.src = Object.values(data.sprites)[4];
}

// Cridem a la funció per mostrar la informació del Pokemon a la pàgina web.
// displayPokemonInfo(430);

// INPUT D'USUARI PER BUSCAR UN POKEMON ===
// Sellecionem la card on hi ha la info del Pokemon.
const card = document.getElementById("pokemon");

// Creem el form que contindrà l'input i el botó.
const form = document.createElement("form");
card.appendChild(form);
// ===


// Creem l'input text i el fem maco...
const idInput = document.createElement("input");
idInput.id = "idInput";
idInput.placeholder = "Search Pokemon by ID...";
idInput.classList.add("w-full", "border", "p-2", "rounded");

// Inserim l'input a la card amb l'info del Pokemon.
form.appendChild(idInput)
// ===

// BOTÓ D'USUARI PER BUSCAR UN POKEMON ===
const button = document.createElement("button");
button.innerHTML = "Search";
button.classList.add("border", "p-1", "px-4", "rounded", "bg-green-500", "text-white", "mt-2")
form.appendChild(button);
// ===

// EVENTLISTENER DEL FORM ===
// Quan el form detecti el submit del botó...
form.addEventListener('submit', function (e) {

  // Evitem que es refresqui la pàgina.
  e.preventDefault();

  // Obtenim l'ID del Pokemon de l'input de l'usuari.
  const idPokemon = document.getElementById("idInput").value;

  // Cridem el mètode amb la ID que ha introduït l'usuari com a paràmetre.
  displayPokemonInfo(idPokemon);
})
// ===
