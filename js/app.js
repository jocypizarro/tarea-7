const container = document.getElementById("pokemon-container");

async function obtenerPokemones() {

try {

        const respuesta = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        if (!respuesta.ok) {
            throw new Error("Error al obtener los Pokemon");
        }

        const data = await respuesta.json();

        for (const pokemon of data.results) {

            const detalle = await fetch(pokemon.url);
            const pokemonData = await detalle.json();

            container.innerHTML += `
                <div class="card">
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                    <h3>${pokemonData.name}</h3>
                </div>
            `;
        }

    } catch (error) {

        console.error(error);

        container.innerHTML =
        `<p>Error al cargar los Pokemon.</p>`;

    }
}

obtenerPokemones();