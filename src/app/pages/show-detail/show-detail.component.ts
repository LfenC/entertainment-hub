import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { TvshowsService } from '../../services/tvshows.service';
import { Observable } from 'rxjs';
import { MovieDto } from '../../models/movie';
import { tvShowDto } from '../../models/tvshow';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit{
  showId!: number;
  show$: Observable<MovieDto | tvShowDto> |null=null;
  showVideo$: Observable<string | undefined> | null = null;
  showType: 'tvshows' | 'Movies' = 'Movies';
  showImage$: Observable<string[]| undefined> | null = null;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
    private tvshowsService:TvshowsService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params);

      this.showId = +params['id'];
      this.showType = params['type'];

      if (this.showType === 'Movies') {
      //created this to diferenciate between movie or tvshow and look for it in the correct way (movie os tvshow)
        this.show$ = this.dataService.getMovieById(this.showId);
        this.showVideo$ = this.dataService.getMovieVideos(this.showId);
       this.dataService.getAllMovies().subscribe(movies =>{
          const movie = movies.find(movie => movie.id === this.showId);
          if(movie){
            this.showImage$ = new Observable<string[]>(subscriber => {
              subscriber.next([movie.imageUrl]);
            });
          }
        });
      }else if (this.showType ==='tvshows'){
        this.show$ = this.tvshowsService.getTvShowById(this.showId);
        this.showVideo$ = this.tvshowsService.getTvShowVideos(this.showId);
        this.tvshowsService.getAllTvShows().subscribe(tvShows =>{
          const tvShow = tvShows.find(tvShow => tvShow.id === this.showId);
          if(tvShow){
            this.showImage$ = new Observable<string[]>(subscriber => {
              subscriber.next([tvShow.imageUrl]);
            });
          }
        });
      }
    })
  }
}
