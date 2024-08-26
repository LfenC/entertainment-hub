import { Component, Input } from '@angular/core';
import { MovieDto } from '../../models/movie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {

  @Input() showItem : MovieDto | null = null;
  @Input() showType: 'tvshows' | 'Movies' = 'Movies';

  constructor(private dataService: DataService){}

  toggleFavoritesList(movie: MovieDto) {
    if (this.isInFavorite(movie)) {
      this.dataService.removeFromFavoritesList(movie);
    }else {
      this.dataService.addToFavoritesList(movie);
    }
  }

  isInFavorite(movie: MovieDto) : boolean {
    return this.dataService.isInFavorite(movie);

  }

}
