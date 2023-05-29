import { type NextPage } from "next";
import Head from "next/head";
import PokedexCard from "~/components/pokedexCard";
import Pokeball from '~/images/pokeball.png'
import Image from 'next/image';

const Home: NextPage = () => {
  const pokedexNumbers = 251

  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta property="" content="Pokedex App in NextJS/tRPC/Prisma/Tailwind by Nathan Roark" />
        <meta name="description" content="Pokedex App in NextJS/tRPC/Prisma/Tailwind by Nathan Roark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#141414] to-[#242424]">
        <div className="container flex flex-col items-center justify-center gap-12 px-3 py-16">
          <div className="flex flex-row">
            <Image
              src={Pokeball}
              alt=""
              width={128}
              height={128}
              className="pr-8"
            />
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[#eb312e]">Poké</span>dex
            </h1>
          </div>

          <div className="grid row-auto gap-4 md:gap-8
          grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {[...Array(pokedexNumbers).keys()].map((_, i) =>
              <PokedexCard index={i + 1} key={"pokemon-card-" + i.toString()} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
