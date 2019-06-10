import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Evolution, Evolution_Details, Evolution_Chain, Chain, Evolves_To } from '../pokeevolution.model';
import { Sprites } from '../pokemon-details.model';

@Component({
  selector: 'app-poke-evolution',
  templateUrl: './poke-evolution.component.html',
  styleUrls: ['./poke-evolution.component.css']
})
export class PokeEvolutionComponent implements OnInit {
  pokeEvo: Chain;

  @Input('evochain') evochain: string;
  @Input('pokename') pokename: string;
  evo_chain: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.evo_chain = this.evochain.substring(42,50);

    this.data.getPokeEvo(this.evo_chain)
    .subscribe(data => {
      this.pokeEvo = data.chain
    })
  }

}
