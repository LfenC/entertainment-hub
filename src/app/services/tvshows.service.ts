import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tvShowDto, TvShowGenresDto } from '../models/tvshow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private apiUrl = 'https://localhost:7249/api';
  constructor(private http: HttpClient) { }

    //son mis destacadas en los cards
    getPopularTvShows():  Observable<tvShowDto[]> {
      return this.http.get<tvShowDto[]>(
        `${this.apiUrl}/tvshows/popular`
      );
    }
    getAllTvShows(): Observable<tvShowDto[]>{
      return this.http.get<tvShowDto[]>(
        `${this.apiUrl}/tvshows`
      );
    }
    getUpcomingTvShows(): Observable<tvShowDto[]> {
      return this.http.get<tvShowDto[]>(
        `${this.apiUrl}/tvshows/upcoming`
      );
    }

    //GET genres list
    getTvshowGenres():Observable<TvShowGenresDto[]>{
      return this.http.get<TvShowGenresDto[]>(`${this.apiUrl}/tvshows/tvshows/genres`);
    }
    //get genres by id to display movies
    getTvShowByGenreId(genreId:number): Observable<tvShowDto[]>{
      return this.http.get<tvShowDto[]>(`${this.apiUrl}/tvshows`).pipe(
        map(tvShows => tvShows.filter(tvShow => tvShow.genres.some(genre => genre.genreId === genreId)))
      )
    }

    //get top rated tvshows
    getTopRatedTvShows(): Observable<tvShowDto[]> {
      return this.http.get<tvShowDto[]>(`${this.apiUrl}/tvshows`).pipe(
        map(tv => tv.filter(tvshow => tvshow.rating >=5))
      );
    }

    //GET tvshow by Id
    getTvShowById(id: number): Observable<tvShowDto> {
      return this.http.get<tvShowDto>(`${this.apiUrl}/tvshows/${id}`);
    }

     // GET videos
    getTvShowVideos(id: number): Observable<string | undefined> {
      return this.http.get<string>(`${this.apiUrl}/tvshows/${id}/videos`, {responseType: 'text' as 'json'});
  }

}
