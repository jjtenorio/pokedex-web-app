import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: PokelistComponent },
  { path: 'page/:id', component: PokelistComponent },
  { path: ':name', component: PokedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
