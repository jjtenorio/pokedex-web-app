import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Results } from './pokemon.model';
import { Details, Types } from './pokemon-details.model';
import { Observable } from 'rxjs';
import { Items_Details } from './pokeitem.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
pokeUrlshow = 'https://pokeapi.co/api/v2/pokemon?offset=800&limit='
pokeItemUrl = 'https://pokeapi.co/api/v2/item/1'
pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  getPokemon():Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlshow+'10');
  }

  getPokeInfo(name: string):Observable<Details>{
    return this.http.get<Details>(this.pokeUrl+name);
  }

  getPokeItemImage():Observable<Items_Details>{
    return this.http.get<Items_Details>(this.pokeItemUrl);
  }
}
