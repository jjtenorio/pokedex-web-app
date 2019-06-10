export class Evolution_Details{
    evolution_chain: Evolution;
}

export class Evolution{
    url: string;
}

export class Evolution_Chain{
    chain: Chain;
    id: number;
}

export class Chain{
    evolves_to: Evolves_To[];
    species: Species;
}

export class Evolves_To{
    evolves_to: Evolves_To[];
    species: Species;
}

export class Species{
    name: string;
    url: string;
}


