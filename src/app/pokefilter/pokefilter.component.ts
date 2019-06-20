import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Results } from '../pokemon.model';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokefilter',
  templateUrl: './pokefilter.component.html',
  styleUrls: ['./pokefilter.component.css']
})
export class PokefilterComponent implements OnInit {
  pokeAll: Results[];
  allPoke: Results[];
  pokeId: number;
  default: boolean;
  count: number;
  pager:number[];
  page: number;
  offset: number;
  pokedefault: boolean;
  public default_count: number = 0;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private pokeService: PokemonsService) {
    this.route.paramMap.subscribe(params => {
      this.page = +params.get("id")
    })

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
   }

  ngOnInit() {
    this.data.getAllPokemon()
    .subscribe(data => {
        for (var i = 0; i < data.count-1; i++){
        this.pokeAll = data.results
          
        }
    })

    this.getInfiPokemons();
  }

  getInfiPokemons(){
    this.data.getAllPokemon()
    .subscribe(data => {
      this.pokeAll = data.results
    });
  }


}
