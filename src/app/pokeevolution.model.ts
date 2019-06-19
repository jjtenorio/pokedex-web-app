export class Species_Details{
    evolution_chain: Evolution;
    flavor_text_entries: Flavor_Text_Entries[];
    varieties: Varieties[];
}

export class Evolution{
    url: string;
}

export class Flavor_Text_Entries{
    flavor_text: string;
    language: Language;
    version: Version;
}

export class Varieties{
    is_default: boolean;
    pokemon: Pokemon;
}

export class Language{
    name: string;
    url: string;
}

export class Version{
    name: string;
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

export class Pokemon{
    name: string;
    url: string;
}


