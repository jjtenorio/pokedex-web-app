import { Component, OnInit } from '@angular/core';
import { PokemonArr } from '../pokemonbytype.model';
import { Results } from '../pokemon.model';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokefilterlist',
  templateUrl: './pokefilterlist.component.html',
  styleUrls: ['./pokefilterlist.component.css']
})
export class PokefilterlistComponent implements OnInit {
  pokeAllbyType: PokemonArr[];
  pokeAll: Results[];
  pokeTypes: Results[];
  pokeId: number;
  default: boolean;
  count: number;
  pager:number[];
  type: string;
  offset: number;
  pokedefault: boolean;
  selectedIndex: number;
  public default_count: number = 0;
  mySubscription: any;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private pokeService: PokemonsService) {
    this.route.paramMap.subscribe(params => {
      this.type = params.get("type")
    })

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
   }
   
  ngOnInit() {
    this.data.getPokemonByFilter(this.type)
    .subscribe(data => {  
      console.log(data.pokemon)
      this.pokeAllbyType = data.pokemon
    })
  }
}
