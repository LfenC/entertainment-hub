import { Component, Input } from '@angular/core';
import { MovieDto } from '../../models/movie';
import { tvShowDto } from '../../models/tvshow';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})

export class BannerComponent{

  @Input() shows : MovieDto[] | tvShowDto [] = [];
  @Input() title = '';
  @Input() showsType: 'tvshows' | 'Movies' = 'Movies';

}
