import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Results } from './pokemon.model';
import { Details, Types } from './pokemon-details.model';
import { Observable } from 'rxjs';
import { Items_Details } from './pokeitem.model';
import { Evolution_Details, Evolution_Chain } from './pokeevolution.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
pokeNextUrlshow = 'https://pokeapi.co/api/v2/pokemon?offset=';
pokeUrlshow = 'https://pokeapi.co/api/v2/pokemon?offset=';
pokeItemUrl = 'https://pokeapi.co/api/v2/item/1';
pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
pokeSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
pokeChainUrl = 'https://pokeapi.co/api/v2/evolution-chain/';

  constructor(
    private http:HttpClient
    ) { }

  getPokemon(offset: number):Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlshow+offset+"&limit=60");
  }
  
  getPokeInfo(name: string):Observable<Details>{
    return this.http.get<Details>(this.pokeUrl+name);
  }

  getPokeItemImage():Observable<Items_Details>{
    return this.http.get<Items_Details>(this.pokeItemUrl);
  }

  getPokeSpecie(name: string):Observable<Evolution_Details>{
    return this.http.get<Evolution_Details>(this.pokeSpeciesUrl+name);
  }

  getPokeEvo(chain: string):Observable<Evolution_Chain>{
    return this.http.get<Evolution_Chain>(this.pokeChainUrl+chain);
  }
}
