import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Results } from './pokemon.model';
import { Details, Types } from './pokemon-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
pokeUrlshow = 'https://pokeapi.co/api/v2/pokemon?offset=00&limit=30'
pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  getPokemon():Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlshow);
  }

  getPokeInfo(name: string):Observable<Details>{
    return this.http.get<Details>(this.pokeUrl+name);
  }
}
