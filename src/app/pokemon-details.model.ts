export class Details{
    id: number;
    name: string;
    abilities: Abilities[];
    sprites: Sprites;
    stats: Stats[];
    types: Types[];
    height: number;
    weight: number;
    is_default: boolean;
}

export class Abilities{
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

export class Ability{
    name: string;
    url: string;
}

export class Sprites{
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export class Stats{
    base_stat: number;
    effort: number;
    stat: Stat;
}

export class Stat{
    name: string;
    url: string;
}

export class Types{
    slot: number;
    type: Type;
}

export class Type{
    name: string;
    url: string;
}