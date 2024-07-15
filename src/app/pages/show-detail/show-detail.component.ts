import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit{

  showId = '';

  show$: Observable<Movie |undefined> | null = null;
  showVideo$: Observable<string | undefined> | null = null;

  constructor(
    private router: ActivatedRoute, 
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params);
        this.showId = params['index'];
     }) 
     
    this.show$ = this.dataService.getMovieById(this.showId);
    this.showVideo$ = this.dataService.getMovieVideos(this.showId);
    }
}
