export class PokemonByType{
    pokemon: PokemonArr[];
}

export class PokemonArr {
    pokemon: PokemonObj;
    slot: number;
}

export class PokemonObj {
    name: string;
    url: string;
}
