import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }, //pokemon-detail componeent routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//create pokemon-detail component
//create pokemon-item componenent to be nested in dashboard componenet
// <a [routerLink]="movieURL()">
//   <div class="movie-card">
//     <img [src]="movie.posterURL()" alt="">
//   </div>
// </a>
//create search componenet
