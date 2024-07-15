import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie-list', component: MoviesListComponent},
  { path: 'detail/:index', component: ShowDetailComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
