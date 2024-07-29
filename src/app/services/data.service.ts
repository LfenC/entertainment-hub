import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/movies.json';
  private favoriteItemsList: Movie[] = [];

  constructor(private http: HttpClient) { }

  //son mis destacadas en los cards
  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<{ movies: Movie[] }>(this.jsonUrl).pipe(
      map(data => data.movies.filter(movie => movie.featured))
    );
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<{ movies: Movie[] }>(this.jsonUrl).pipe(
      map(data => data.movies.filter(movie => movie.type === 'upcoming'))
    );
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<{ movies: Movie[] }>(this.jsonUrl).pipe(
      map(data => data.movies.filter(movie => {
        const ratingAsNumber = parseFloat(movie.rating);
        return ratingAsNumber >= 5;
      }))
    );
  }

  getMovieById(index: string): Observable<Movie | undefined> {
    return this.http.get<{movies: Movie[]}> (this.jsonUrl).pipe(
      map(data => data.movies.find(movie => movie.index.toString() === index))
    );
  }

  getMovieVideos(index: string): Observable<string | undefined> {
    return this.http.get<{movies: Movie[]}> (this.jsonUrl).pipe(
      map(data => data.movies.find(movie => movie.index.toString() === index)?.video)
    );
  }

  toggleFavoritesList(item: Movie): void {
    const index = this.favoriteItemsList.findIndex(movie => movie.index === item.index);
    //condition to add to the list
    if (index > -1) {
      this.favoriteItemsList.splice(index, 1);
    } else {
      this.favoriteItemsList.push(item);
    }
  }

  isInFavorite(movie:Movie) : boolean {
    return this.favoriteItemsList.some(showItem => showItem.index === movie.index);
  }

  addToFavoritesList(movie: Movie): void {
    this.favoriteItemsList.push(movie);
  }

  removeFromFavoritesList(movie: Movie): void {
    const index = this.favoriteItemsList.findIndex(showItem => showItem.index === movie.index);
    if (index !== -1) {
      this.favoriteItemsList.splice(index, 1);
    }
  }
}

