import { Component, OnInit, Input } from '@angular/core';
import { Sprites, Stats, Types, Abilities } from '../pokemon-details.model';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evolution, Species_Details, Varieties } from '../pokeevolution.model';;

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {
  pokename: string;
  pokeChain: Evolution;
  pokeSpecieName: string;
  pokeDefName: string;
  prevpokename: string;
  nextpokename: string;
  pokeNextName: string;
  pokePrevName: string;
  pokeId: number;
  pokeVariety: Varieties[];

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
              this.pokeSpecieName = data.species.name

              this.data.getPokeSpecie(this.pokeSpecieName)
              .subscribe(data => {
              this.pokeChain = data.evolution_chain

              this.data.getPokeById(this.pokeId-1)
              .subscribe(data => {
                this.pokePrevName = data.species.name
              })

              this.data.getPokeById(this.pokeId+1)
              .subscribe(data => {
                this.pokeNextName = data.species.name
              })
              })
            })
            });
          }
        }
      })

    } 
  }

  
  prevPoke(){
    this.data.getPokeById(this.pokeId-1)
    .subscribe(data => {
      this.prevpokename = data.species.name
      this.router.navigate(['/',this.prevpokename])
    })
  }

  nextPoke(){
    this.data.getPokeById(this.pokeId+1)
    .subscribe(data => {
      this.nextpokename = data.species.name
      this.router.navigate(['/',this.nextpokename])
    })
  }

  goBack(){
      this.router.navigate([''])
   }
}
