import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Details, Sprites, Types } from '../pokemon-details.model';
import { ItemSprites } from '../pokeitem.model';

@Component({
  selector: 'app-pokedisplay',
  templateUrl: './pokedisplay.component.html',
  styleUrls: ['./pokedisplay.component.css']
})
export class PokedisplayComponent implements OnInit {
  pokeImg: Sprites;
  pokeType: Types[];
  itemImg: ItemSprites;
  @Input('pokename') pokename: string;


  constructor(private data: DataService) { }

  ngOnInit() {
    if(this.pokename){
      this.data.getPokeInfo(this.pokename)
      .subscribe(data => {
        console.log(data.sprites.front_default)
        this.pokeImg = data.sprites
      });

      this.data.getPokeInfo(this.pokename)
      .subscribe(data => {
        this.pokeType = data.types
      });

      this.data.getPokeItemImage()
      .subscribe(data => {
      this.itemImg = data.sprites
      });
      
    }
  }

    
}
