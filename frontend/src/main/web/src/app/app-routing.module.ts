import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from "./components/movie/movie.component";
import {MoviesComponent} from "./components/movies/movies.component";


const routes: Routes = [
  { path: 'movie/:id', component: MovieComponent },
  { path: 'movies', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
