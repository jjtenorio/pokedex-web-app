import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedisplayComponent } from './pokedisplay/pokedisplay.component';
import { DataService } from './data.service';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokedisplayComponent,
    PokedetailsComponent,
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
