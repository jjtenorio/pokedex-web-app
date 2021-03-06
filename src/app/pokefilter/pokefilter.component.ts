import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { PokemonArr } from '../pokemonbytype.model';
import { Results } from '../pokemon.model';
import { PokefilterlistComponent } from '../pokefilterlist/pokefilterlist.component';

@Component({
  selector: 'app-pokefilter',
  templateUrl: './pokefilter.component.html',
  styleUrls: ['./pokefilter.component.css']
})
export class PokefilterComponent implements OnInit {
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


  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private pokeService: PokemonsService) {
    this.route.paramMap.subscribe(params => {
      this.type = params.get("type")
    })
   }

  ngOnInit() {
    this.data.getPokemonTypes()
    .subscribe(data => {
      this.pokeTypes = data.results
    })
  }

  setRow(_index: number) {
    this.selectedIndex = _index;
  }

  goToType(ty: string){
    this.data.getPokemonByFilter(ty)
    .subscribe(data => {  
      this.router.navigate(['/filter/',ty]);
    })
  }



}
