import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  popularMovies$ = this.dataService.getPopularMovies();
  upcomingMovie$ = this.dataService.getUpcomingMovies();
  topRatedMovies$ = this.dataService.getTopRatedMovies();

  popularTvshows$ = this.tvshowsService.getTvShowsByType('popular');

  constructor(
    private dataService: DataService,
    private tvshowsService: TvshowsService
  ) { }

}
