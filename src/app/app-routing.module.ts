import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { PokemenuComponent } from './pokemenu/pokemenu.component';
import { PokefilterComponent } from './pokefilter/pokefilter.component';

const routes: Routes = [
  { path: '', component: PokemenuComponent },
  { path: 'filter/:type', component: PokefilterComponent },
  { path: 'page/:id', component: PokelistComponent },
  { path: ':name', component: PokedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
