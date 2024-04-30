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

  console.log(data);

  try {
    data.map((e) => ({
      id: e.id,
      name: e.name,
      height: e.height,
      weight: e.weight,
      abilities: e.abilities.map((i) => {
        
      }),
      sprites: e.sprites,
    }));

    return data;
  } catch (error) {
    console.error("ERROR: ", error);
  }
}

console.log(getPokemonInfo(1));