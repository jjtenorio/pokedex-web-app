import { Component, OnInit, Input } from '@angular/core';
import { Sprites, Stats, Types, Abilities } from '../pokemon-details.model';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evolution, Evolution_Details } from '../pokeevolution.model';;

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {
  pokename: string;
  pokeChain: Evolution;
  prevpokename: string;
  nextpokename: string;
  pokeId: number;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router) { 
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
      })
      
      this.data.getPokeSpecie(this.pokename)
      .subscribe(data => {
      this.pokeChain = data.evolution_chain
      })
    }
  }

  
  prevPoke(){
    this.data.getPokeById(this.pokeId-1)
    .subscribe(data => {
      this.prevpokename = data.name
      this.router.navigate(['/',this.prevpokename])
    })
  }

  nextPoke(){
    this.data.getPokeById(this.pokeId+1)
    .subscribe(data => {
      this.nextpokename = data.name
      this.router.navigate(['/',this.nextpokename])
    })
  }

  goBack(){
      this.router.navigate([''])
   }
}
