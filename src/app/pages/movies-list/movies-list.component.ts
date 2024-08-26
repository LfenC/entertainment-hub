import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { MovieDto } from '../../models/movie';
import { TvshowsService } from '../../services/tvshows.service';
import { ActivatedRoute } from '@angular/router';
import { tvShowDto } from '../../models/tvshow';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit {

  showsList$ : Observable<MovieDto[] | tvShowDto[]> | null = null;
  showType: 'tvshows' | 'Movies' = 'Movies';
  constructor(private dataService: DataService,
    private tvShowsService: TvshowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showType = this.route.snapshot.params['type']
    console.log('Show Type:', this.showType); // Verifica el valor de showType

    this.getPagedShows(this.showType);
  }
  getPagedShows(
    showType: 'Movies' | 'tvshows',
  ) {
    if (showType === 'Movies'){
      this.showsList$ = this.dataService.getAllMovies();
    }
    if (showType === 'tvshows'){
      this.showsList$ = this.tvShowsService.getAllTvShows();
    }
  }
}
