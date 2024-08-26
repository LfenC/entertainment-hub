import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { LoginComponent } from './login/login.component';
import { GenresComponent } from './pages/genres/genres.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie-list/:type', component: MoviesListComponent},
  { path: 'movie-list/:type/detail/:id/:type', component: ShowDetailComponent},
  { path: 'detail/:id/:type', component: ShowDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'genres', component: GenresComponent},
  { path: 'genres/detail/:id/:type', component: ShowDetailComponent},
  { path: 'movies', component: GenresComponent},
  { path: 'tvshows', component: GenresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
