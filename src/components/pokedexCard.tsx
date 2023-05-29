import Link from "next/link";
import Image from "next/image";
import { api } from "~/utils/api";
import { getTypeColorBorder, getTypeColorText } from "~/utils/typeColors";
type cardProps = { index: number }

const PokedexCard: React.FC<cardProps> = (props) => {
    const pokemon = api.pokemon.getPokemonById.useQuery({ id: props.index });
    const data = pokemon.data

    return (
        <>
            {data &&
                < Link
                    className={`flex flex-col max-w-xs gap-4 p-4 rounded-xl bg-white/10 ${getTypeColorBorder(data.type1)}
                     text-white hover:border-2`}
                    href={"https://www.pokemon.com/us/pokedex/" + data.name}
                    target="_blank">
                    <div className="text-2xl font-bold capitalize">
                        <h3>{data.name}</h3>
                        <h4 className="text-opacity-50 text-white">#{props.index}</h4>
                    </div>
                    <Image
                        src={data.spriteUrl}
                        alt=""
                        width={256}
                        height={256}
                        className="animate-fade-in"
                    />
                    <div className="text-lg flex space-x-2 font-bold rounded-sm capitalize">
                        <div className={`${getTypeColorText(data.type1)}`}>{data.type1}</div>
                        <div className={`${getTypeColorText(data.type2)}`}>{data.type2}</div>
                    </div>
                </Link >
            }
        </>
    );
};

export default PokedexCard;
