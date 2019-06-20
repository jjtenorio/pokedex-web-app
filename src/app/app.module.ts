import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedisplayComponent } from './pokedisplay/pokedisplay.component';
import { DataService } from './data.service';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { PokeEvolutionComponent } from './poke-evolution/poke-evolution.component';
import { PokeEvoDisplayComponent } from './poke-evo-display/poke-evo-display.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { PokeinfoComponent } from './pokeinfo/pokeinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PokemenuComponent } from './pokemenu/pokemenu.component';
import { PokefilterComponent } from './pokefilter/pokefilter.component';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokedisplayComponent,
    PokedetailsComponent,
    PokeEvolutionComponent,
    PokeEvoDisplayComponent,
    ScrollTopComponent,
    PokeinfoComponent,
    PokemenuComponent,
    PokefilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
