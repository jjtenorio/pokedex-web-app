import { Component, OnInit, Input } from '@angular/core';
import { Sprites, Stats, Types, Abilities } from '../pokemon-details.model';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evolution, Evolution_Details } from '../pokeevolution.model';
import { pipe } from 'rxjs';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {
  pokename: string;
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

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location) { 
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
        this.pokeImg = data.sprites
        this.pokeAbi = data.abilities
        this.pokeType = data.types
        this.pokeStat = data.stats.sort((a, b) => (a.stat.name > a.stat.name)? 1: -1);
        this.pokeHeight = data.height
        this.pokeWeight = data.weight
      });
      this.data.getPokeInfo(this.pokename)
      .pipe(take(1)).subscribe(data => {
        this.pokename_default = data.name});
      }

      this.data.getPokeSpecie(this.pokename)
      .subscribe(data => {
      this.pokeChain = data.evolution_chain
      })
    }
  

  goBack(){
      this.router.navigate([''])
   }
}
