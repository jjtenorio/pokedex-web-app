import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Details, Sprites } from '../pokemon-details.model';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {
  pokeImg: Sprites;
  @Input() pokemon: Pokemon;

  constructor(private data: DataService) { }

  ngOnInit() {
   
}
}
