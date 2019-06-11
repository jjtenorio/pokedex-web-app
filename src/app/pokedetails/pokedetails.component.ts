import { Component, OnInit, Input } from '@angular/core';
import { Sprites, Stats, Types, Abilities } from '../pokemon-details.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Evolution, Evolution_Details } from '../pokeevolution.model';

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
  pokeHeight: number;
  pokeWeight: number;
  order: string;

  constructor(
    private data: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.pokename = this.route.snapshot.paramMap.get('name');

    if(this.pokename){
      this.data.getPokeInfo(this.pokename)
      .subscribe(data => {
        this.pokeImg = data.sprites
        this.pokeAbi = data.abilities
        this.pokeStat = data.stats.sort((a, b) => (a.stat.name > a.stat.name)? 1: -1);
        this.pokeHeight = data.height
        this.pokeWeight = data.weight
        this.pokeType = data.types
      });

      this.data.getPokeSpecie(this.pokename)
      .subscribe(data => {
      this.pokeChain = data.evolution_chain
      })
    }
    

  }

}
