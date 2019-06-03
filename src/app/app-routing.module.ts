import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'pokedetails', component: PokedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
