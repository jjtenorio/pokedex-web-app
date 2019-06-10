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
pokeUrlshow = 'https://pokeapi.co/api/v2/pokemon?offset=00&limit=';
pokeItemUrl = 'https://pokeapi.co/api/v2/item/1';
pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
pokeSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
pokeChainUrl = 'https://pokeapi.co/api/v2/evolution-chain/';

  constructor(private http:HttpClient) { }

  getPokemon():Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlshow+'100');
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

  getPokeEvoo(chain: string):Observable<Evolution_Chain>{
    return this.http.get<Evolution_Chain>(this.pokeChainUrl+chain);
  }
}