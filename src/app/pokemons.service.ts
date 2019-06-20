import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokeUrlshow: 'https://pokeapi.co/api/v2/pokemon?offset=';
  constructor(private http: HttpClient) { }

  getAllPokemon():Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokeUrlshow+"&limit=964");
  }
}
