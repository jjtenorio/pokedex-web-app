import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Sprites, Types } from '../pokemon-details.model';
import { ItemSprites } from '../pokeitem.model';
import { Varieties } from '../pokeevolution.model';

@Component({
  selector: 'app-poke-evo-display',
  templateUrl: './poke-evo-display.component.html',
  styleUrls: ['./poke-evo-display.component.css']
})
export class PokeEvoDisplayComponent implements OnInit {
  pokeImg: Sprites;
  pokeVariety: Varieties[];
  itemImg: ItemSprites;
  pokeSpecieName: string;
  @Input('pokename') pokename: string;


  constructor(private data: DataService) { }

  ngOnInit() {
    if(this.pokename){
      this.data.getPokeSpecie(this.pokename)
      .subscribe(data => {
        this.pokeVariety = data.varieties

        for(var i=0; i<this.pokeVariety.length; i++){
          if(this.pokeVariety[i].is_default){
            this.data.getPokeInfo(this.pokeVariety[i].pokemon.name)
            .subscribe(data => {
              this.pokeSpecieName = data.species.name
              this.pokeImg = data.sprites
            });
          }
        }
      })

      
      
      this.data.getPokeItemImage()
      .subscribe(data => {
      this.itemImg = data.sprites
      });
      
    }
  }

}
