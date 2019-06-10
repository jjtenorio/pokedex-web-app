import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Sprites, Types } from '../pokemon-details.model';
import { ItemSprites } from '../pokeitem.model';

@Component({
  selector: 'app-poke-evo-display',
  templateUrl: './poke-evo-display.component.html',
  styleUrls: ['./poke-evo-display.component.css']
})
export class PokeEvoDisplayComponent implements OnInit {
  pokeImg: Sprites;
  itemImg: ItemSprites;
  @Input('pokename') pokename: string;


  constructor(private data: DataService) { }

  ngOnInit() {
    if(this.pokename){
      this.data.getPokeInfo(this.pokename)
      .subscribe(data => {
        this.pokeImg = data.sprites
      });
      
      this.data.getPokeItemImage()
      .subscribe(data => {
      this.itemImg = data.sprites
      });
      
    }
  }

}
