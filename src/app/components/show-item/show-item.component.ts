import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
  @Input() showItem : Movie | null = null;

  constructor(private dataService: DataService){}

  toggleFavoritesList(movie: Movie) {
    if (this.isInFavorite(movie)) {
      this.dataService.removeFromFavoritesList(movie);
    }else {
      this.dataService.addToFavoritesList(movie);
    }
  }

  isInFavorite(movie: Movie) : boolean {
    return this.dataService.isInFavorite(movie);

  }

}
