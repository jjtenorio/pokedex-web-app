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
  pokeId: number;
  default: boolean;
  count: number;
  pager:number[];
  page: number;
  offset: number;
  pokedefault: boolean;

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
    this.offset = (this.page-1) * 60;
    if(this.offset < 0) {
      this.offset = 0
    }
    this.data.getPokemon(this.offset)
    .subscribe(data => {
      this.poke$ = data.results
      this.count = Math.trunc((data.count/60))
      if((data.count/60 % 1) > 0){
        this.count = this.count + 1
      }
      this.pager = new Array(this.count)
    });
  }
}
