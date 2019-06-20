import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Abilities, Sprites, Types, Stats } from '../pokemon-details.model';
import { Evolution, Flavor_Text_Entries, Varieties } from '../pokeevolution.model';

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
  pokeDefName: string;
  pokeId: number;
  pokeHeight1: number;
  pokeHeight2: string;
  pokeWeight: number;
  pokename_default: string;
  @Input('pokename') pokename: string;
  pokeVariety: Varieties[];

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
      this.data.getPokeSpecie(this.pokename)
      .subscribe(data => {
        this.pokeVariety = data.varieties

        for(var i=0; i<this.pokeVariety.length; i++){
          if(this.pokeVariety[i].is_default){
            this.data.getPokeInfo(this.pokeVariety[i].pokemon.name)
            .subscribe(data => {
              this.pokeDefName = data.name

              this.data.getPokeInfo(this.pokeDefName)
              .subscribe(data => {
                this.pokeId = data.id
                this.pokeImg = data.sprites
                this.pokeAbi = data.abilities
                this.pokeType = data.types
                this.pokeStat = data.stats.reverse()
                this.pokeHeight1 = Math.trunc((data.height*3.93701)/12)
                this.pokeHeight2 = Math.round((data.height*3.93701)%12).toFixed().replace('','0')
                
                this.pokeWeight = +(data.weight*0.220462).toFixed(1)
                this.pokeSpecieName = data.species.name

                this.data.getPokeSpecie(this.pokeSpecieName)
                .subscribe(data => {
                this.pokeChain = data.evolution_chain
                this.pokeFlavorTextEnt = data.flavor_text_entries
                })
              });
            });
          }
        }
      })
      }
  }

}
