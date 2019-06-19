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
  pokeName: string;
  pokeId: number;
  pokeDefault: boolean;
  pokeSpecieName: string;
  itemImg: ItemSprites;
  @Input('name') name: string;


  constructor(private data: DataService) { }

  ngOnInit() {
    if(this.name){
      this.data.getPokeInfo(this.name)
      .subscribe(data => {
        if(data.is_default){
          this.pokeImg = data.sprites
          this.pokeType = data.types
          this.pokeName = data.name
          this.pokeId = data.id
          this.pokeDefault = data.is_default
          this.pokeSpecieName = data.species.name
        }
      });

      this.data.getPokeItemImage()
      .subscribe(data => {
      this.itemImg = data.sprites
      });
      
    }
  }

    
}
