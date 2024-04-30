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
  const data = await getPokemonData(`pokemon/${id}`);

  try {
    console.log(data);

    const abilities = data.abilities.map((e) => {
      return e.ability.name;
    });

    const sprites = data.sprites;

    for (const sprite in sprites) {
      let spriteURL = sprites[sprite];
    }

    const pokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      abilitats: abilities,
      sprites: sprites,
    };

    console.log(pokemon);

    return pokemon;
  } catch (error) {
    console.error("ERROR: ", error);
  }
}

async function displayPokemonInfo(id) {

  // Esperem a que la funció ens retorni la informació del Pokemon que correspon a l'ID
  const data = await getPokemonInfo(id);

  const name = document.getElementById("name");
  name.innerHTML = `Name: ${data.name}`;

  const height = document.getElementById("height");
  height.innerHTML = `Height: ${data.height}`;

  const weight = document.getElementById("weight");
  weight.innerHTML = `Weight: ${data.weight}`;

  const abilities = document.getElementById("abilities");
  abilities.innerHTML = `Abilities: ${data.abilitats}`;

  const img = document.getElementById("sprite");
  img.src = Object.values(data.sprites)[4];
}

displayPokemonInfo(3);
