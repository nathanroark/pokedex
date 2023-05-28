import { type NextPage } from "next";
import Head from "next/head";
import PokedexCard from "~/components/pokedexCard";

const Home: NextPage = () => {
  const pokedexNumbers = 251

  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokedex App in NextJS/tRPC/Prisma/Tailwind by Nathan Roark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#242424] to-[#141414]">
        <div className="container flex flex-col items-center justify-center gap-12 px-3 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(0,100%,65%)]">Poké</span>dex
          </h1>
          <div className="grid row-auto gap-4 md:gap-8
          grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {[...Array(pokedexNumbers).keys()].map((_, i) =>
              <PokedexCard index={i + 1} key={"pokemon-card-" + i.toString()} />
            )}
          </div>
          <p className="text-2xl font-thin text-white">
            Built by Nathan Roark
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
