

export const getTypeColorText = (type: string | undefined) => {
    if (type == undefined) return "text-[#000000]"
    const colors = {
        normal: 'text-[#A8A77A]',
        fire: 'text-[#EE8130]',
        water: 'text-[#6390F0]',
        electric: 'text-[#F7D02C]',
        grass: 'text-[#7AC74C]',
        ice: 'text-[#96D9D6]',
        fighting: 'text-[#C22E28]',
        poison: 'text-[#A33EA1]',
        ground: 'text-[#E2BF65]',
        flying: 'text-[#A98FF3]',
        psychic: 'text-[#F95587]',
        bug: 'text-[#A6B91A]',
        rock: 'text-[#B6A136]',
        ghost: 'text-[#735797]',
        dragon: 'text-[#6F35FC]',
        dark: 'text-[#705746]',
        steel: 'text-[#B7B7CE]',
        fairy: 'text-[#D685AD]',
    };

    for (const key in colors) {
        if (key === type)
            return colors[key as keyof typeof colors]
    }

    return "text-[#000000]"
}

export const getTypeColorBorder = (type: string | undefined) => {
    if (type == undefined) return "text-[#000000]"
    const colors = {
        normal: 'hover:border-[#A8A77A]',
        fire: 'hover:border-[#EE8130]',
        water: 'hover:border-[#6390F0]',
        electric: 'hover:border-[#F7D02C]',
        grass: 'hover:border-[#7AC74C]',
        ice: 'hover:border-[#96D9D6]',
        fighting: 'hover:border-[#C22E28]',
        poison: 'hover:border-[#A33EA1]',
        ground: 'hover:border-[#E2BF65]',
        flying: 'hover:border-[#A98FF3]',
        psychic: 'hover:border-[#F95587]',
        bug: 'hover:border-[#A6B91A]',
        rock: 'hover:border-[#B6A136]',
        ghost: 'hover:border-[#735797]',
        dragon: 'hover:border-[#6F35FC]',
        dark: 'hover:border-[#705746]',
        steel: 'hover:border-[#B7B7CE]',
        fairy: 'hover:border-[#D685AD]',
    };

    for (const key in colors) {
        if (key === type)
            return colors[key as keyof typeof colors]
    }

    return "hover:border-[#000000]"
}