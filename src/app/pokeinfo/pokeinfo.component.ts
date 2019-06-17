import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Abilities, Sprites, Types, Stats } from '../pokemon-details.model';
import { Evolution } from '../pokeevolution.model';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css']
})
export class PokeinfoComponent implements OnInit {
  pokeAbi: Abilities[];
  pokeImg: Sprites;
  pokeStat: Stats[];
  pokeType: Types[];
  pokeChain: Evolution;
  pokeId: number;
  pokeHeight: number;
  pokeWeight: number;
  order: string;
  pokename_default: string;
  @Input('pokename') pokename: string;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.paramMap.subscribe(params => {
      this.pokename = params.get("name")
    })

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
   }

  ngOnInit() {
    if(this.pokename){
      this.data.getPokeInfo(this.pokename)
      .subscribe(data => {
        this.pokeId = data.id
        this.pokeImg = data.sprites
        this.pokeAbi = data.abilities
        this.pokeType = data.types
        this.pokeStat = data.stats.sort((a, b) => (a.stat.name > a.stat.name)? 1: -1);
        this.pokeHeight = data.height
        this.pokeWeight = data.weight
      });
      this.data.getPokeInfo(this.pokename)
      .subscribe(data => {
        this.pokename_default = data.name});
      }

      this.data.getPokeSpecie(this.pokename)
      .subscribe(data => {
      this.pokeChain = data.evolution_chain
      })
  }

}
