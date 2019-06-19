import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon, Results } from '../pokemon.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  poke$: Results[];
  pokeAll: Results[];
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
    private router: Router) {
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
          this.data.getPokeInfo(this.pokeAll[i].name)
          .subscribe(data => {
            this.default = data.is_default
          if(this.default){
            this.default_count = this.default_count + 1
          }
          if(this.default_count === 807){
            this.count = Math.ceil(this.default_count/60)
            this.pager = new Array(this.count)
          }
          })
        }
    })

    this.offset = (this.page-1) * 60;
    if(this.offset < 0) {
      this.offset = 0
    }
    this.data.getPokemon(this.offset)
    .subscribe(data => {
      this.poke$ = data.results
      
    });
    
  }

}
