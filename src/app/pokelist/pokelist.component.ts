import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon, Results } from '../pokemon.model';
import { Details, Sprites } from '../pokemon-details.model';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  poke$: Results[];
  pokeImg: Sprites;
  pokename: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPokemon()
    .subscribe(data => {
      this.poke$ = data.results});

    // if(this.pokemon){}
    this.data.getPokeImg('bulbasaur').subscribe( data => {
      this.pokeImg = data.sprites;
    })
  }
  

}
