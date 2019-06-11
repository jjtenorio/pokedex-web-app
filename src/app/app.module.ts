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
import { PagerComponent } from './pager/pager.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokedisplayComponent,
    PokedetailsComponent,
    PokeEvolutionComponent,
    PokeEvoDisplayComponent,
    PagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
