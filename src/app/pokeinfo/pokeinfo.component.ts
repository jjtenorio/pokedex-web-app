import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Abilities, Sprites, Types, Stats } from '../pokemon-details.model';
import { Evolution, Flavor_Text_Entries } from '../pokeevolution.model';

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
  pokeFlavorTextEnt: Flavor_Text_Entries[];
  pokeSpecieName: string;
  pokeId: number;
  pokeHeight: number;
  pokeWeight: number;
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
        this.pokeStat = data.stats.reverse()
        this.pokeHeight = data.height
        this.pokeWeight = data.weight
        this.pokeSpecieName = data.species.name

        this.data.getPokeSpecie(this.pokeSpecieName)
        .subscribe(data => {
        this.pokeChain = data.evolution_chain
        this.pokeFlavorTextEnt = data.flavor_text_entries
        })


      });
      }
  }

}
