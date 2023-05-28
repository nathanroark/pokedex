import { PokemonClient } from "pokenode-ts";

import { prisma } from "./db-ts-node";

type Pokemon = {
    id: number,
    name: string,
    type1: string,
    type2: string,
    spriteUrl: string,
}

let pokemonData: Record<string, Pokemon> = {}

async function fetchPokemonData(url: string) {
    const response = await fetch(url)
    let dataRaw = ''
    if (response.ok) { dataRaw = await response.text() } else { console.log("Error HTTP: " + response.status) }
    const data = JSON.parse(dataRaw)
    let mon: Pokemon = {
        id: data['id'],
        name: data['name'],
        type1: data['types'][0].type.name,
        type2: data['types'][1]?.type ? data['types'][1]?.type.name : "",
        spriteUrl: data['sprites']['front_default'],
    }
    pokemonData[mon.id] = mon
}

const doBackfill = async () => {
    const pokeApi = new PokemonClient();

    const allPokemon = await pokeApi.listPokemons(0, 1008);

    for (const key in allPokemon.results) {
        let url = allPokemon.results[parseInt(key)]?.url
        if (url == undefined) throw 'Undefined pokemon' + key
        await fetchPokemonData(url)
    }

    const formattedPokemon = allPokemon.results.map((_, index) => {
        let mon = pokemonData[index + 1]
        if (mon == undefined) throw 'Error'
        return ({
            id: mon.id,
            name: mon.name,
            type1: mon.type1,
            type2: mon.type2,
            spriteUrl: mon.spriteUrl,
        })
    });

    // console.log(formattedPokemon) // check work

    const creation = await prisma.pokemon.createMany({
        data: formattedPokemon,
    });

    console.log("Creation?", creation);
};

doBackfill();