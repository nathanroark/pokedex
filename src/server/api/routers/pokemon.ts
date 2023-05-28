import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const pokemonRouter = createTRPCRouter({
  getPokemonById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      // const api = new PokemonClient();
      // const pokemon = await api.getPokemonById(input.id);
      const pokemon = await prisma.pokemon.findFirst({
        where: { id: input.id },
      });

      if (!pokemon)
        throw new Error("Failed to find two pokemon");

      return pokemon
      // {
      //   id: pokemon.id,
      //     name: pokemon.name,
      //       type1: pokemon.type1,
      //         type2: pokemon.type1,
      //           sprite: pokemon.sprite,
      // }
    }),
});
