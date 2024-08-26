import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { MovieDto, MovieGenresDto } from '../../models/movie';
import { tvShowDto } from '../../models/tvshow';
import { TvshowsService } from '../../services/tvshows.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss'
})
export class GenresComponent implements OnInit {
  genres$ : Observable<MovieGenresDto[]> | null = null;
  filteredMovies: MovieDto[] = [];
  filteredTvShows: tvShowDto[] = [];

  show$: Observable<MovieDto[]> | null = null;

  constructor(
    private dataService : DataService,
    private tvShowsService: TvshowsService,
    private route: ActivatedRoute,
    private router: Router

  ){}

  ngOnInit(){
    this.genres$ = this.dataService.getMovieGenres();

    this.dataService.getAllMovies().subscribe(movies => {
        this.filteredMovies = movies;
    })
    this.tvShowsService.getAllTvShows().subscribe(tvShows =>{
        this.filteredTvShows = tvShows;
    });
  }

  filterByGenre(genreId: number): void{
    this.dataService.getMoviesByGenreId(genreId).subscribe(movies => {
      this.filteredMovies = movies;
    });
    this.tvShowsService.getTvShowByGenreId(genreId).subscribe(tvShows => {
      this.filteredMovies = tvShows;
    });
  }
}
