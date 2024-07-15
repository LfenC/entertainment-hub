import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { tvshow } from '../models/tvshow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private jsonUrlM = 'assets/tvshows.json'
  constructor(private http: HttpClient) { }
  
  getTvShowsByType(type: string, count:number = 5): Observable<tvshow[]> {
    return this.http.get<{ tvshows: tvshow[] }>(this.jsonUrlM).pipe(
      map(data => data.tvshows.slice(0, count)))
  }

}
