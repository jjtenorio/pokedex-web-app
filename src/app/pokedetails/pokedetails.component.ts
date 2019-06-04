import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Details, Sprites, Types } from '../pokemon-details.model';
import { Pokemon, Results } from '../pokemon.model';
import { Source } from 'webpack-sources';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {
  pokeImg: Sprites;
  pokeType: Types[];
  @Input('pokename') pokename: string;


  constructor(private data: DataService) { }

  ngOnInit() {
    if(this.pokename){
      this.data.getPokeImg(this.pokename)
      .subscribe(data => {
        this.pokeImg = data.sprites
      });

      this.data.getPokeType(this.pokename)
      .subscribe(data => {
        this.pokeType = data.types
      });
    }
  }

    
}
