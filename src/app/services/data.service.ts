import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/movies.json'

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
}

