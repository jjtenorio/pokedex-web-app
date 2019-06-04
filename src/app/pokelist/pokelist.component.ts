import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon, Results } from '../pokemon.model';
import { Sprites } from '../pokemon-details.model';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  poke$: Results[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPokemon()
    .subscribe(data => {
      this.poke$ = data.results});

    
  }
}
