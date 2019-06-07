import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon, Results } from '../pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  poke$: Results[];

  constructor(
    private data: DataService,
    private router: Router) { }

  ngOnInit() {
    this.data.getPokemon()
    .subscribe(data => {
      this.poke$ = data.results
    });
  }

}
