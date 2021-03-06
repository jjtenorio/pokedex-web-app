import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Results } from './pokemon.model';
import { Details, Types } from './pokemon-details.model';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Items_Details } from './pokeitem.model';
import { Species_Details, Evolution_Chain } from './pokeevolution.model';
import { PokemonByType } from './pokemonbytype.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
pokeNextUrlshow = 'https://pokeapi.co/api/v2/pokemon?offset=';
pokeUrlshow = 'https://pokeapi.co/api/v2/pokemon?offset=';
pokeUrlfilter= 'https://pokeapi.co/api/v2/type/';
pokeItemUrl = 'https://pokeapi.co/api/v2/item/1';
pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
pokeSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
pokeChainUrl = 'https://pokeapi.co/api/v2/evolution-chain/';

private log(message: string) {
  
}

  constructor(private http:HttpClient) { }

  getPokemon(offset: number):Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlshow+offset+"&limit=60");
  }

  getAllPokemon():Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlshow+"00&limit=963");
  }

  getPokemonTypes():Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlfilter)
  }

  getPokemonByFilter(type: string):Observable<PokemonByType>{
    return this.http.get<PokemonByType>(this.pokeUrlfilter+type);
  }
  
  getPokeInfo(name: string):Observable<Details>{
    return this.http.get<Details>(this.pokeUrl+name);
  }

  getPokeById(id: number):Observable<Details>{
    return this.http.get<Details>(this.pokeUrl+id);
  }

  getPokeItemImage():Observable<Items_Details>{
    return this.http.get<Items_Details>(this.pokeItemUrl);
  }

  getPokeSpecie(name: string):Observable<Species_Details>{
    return this.http.get<Species_Details>(this.pokeSpeciesUrl+name);
  }

  getPokeEvo(chain: string):Observable<Evolution_Chain>{
    return this.http.get<Evolution_Chain>(this.pokeChainUrl+chain);
  }
}
