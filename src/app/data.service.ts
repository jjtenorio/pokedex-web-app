import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Results } from './pokemon.model';
import { Details } from './pokemon-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
pokedetailsUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  getPokemon(){
    return this.http.get<Pokemon>(this.pokeUrl);
  }

  getPokeImg(name: string){
    const url = `${this.pokedetailsUrl+name}`
    return this.http.get<Details>(url);
  }
}
