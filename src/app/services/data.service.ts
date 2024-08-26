import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDto, MovieGenresDto } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7249/api';
  private favoriteItemsList: MovieDto[] = [];

  constructor(private http: HttpClient) { }

  //son mis destacadas en los cards
  getPopularMovies():  Observable<MovieDto[]> {
    return this.http.get<MovieDto[]>(
      `${this.apiUrl}/Movies/popular`
    );
  }
  getAllMovies(): Observable<MovieDto[]>{
    return this.http.get<MovieDto[]>(
      `${this.apiUrl}/Movies`
    );
  }

  getUpcomingMovies(): Observable<MovieDto[]> {
    return this.http.get<MovieDto[]>(
      `${this.apiUrl}/Movies/upcoming`
    );
  }

  //get top rated movies
  getTopRatedMovies(): Observable<MovieDto[]> {
    return this.http.get<MovieDto[]>(`${this.apiUrl}/Movies`).pipe(
      map(movies => movies.filter(movie => movie.rating >=5))
    );
  }

  //GET movie by Id
  getMovieById(id: number): Observable<MovieDto> {
    return this.http.get<MovieDto>(`${this.apiUrl}/Movies/${id}`);
  }

  //GET genres list
  getMovieGenres():Observable<MovieGenresDto[]>{
    return this.http.get<MovieGenresDto[]>(`${this.apiUrl}/Movies/movies/genres`);
  }
  //get genres by id to display movies
  getMoviesByGenreId(genreId:number): Observable<MovieDto[]>{
    return this.http.get<MovieDto[]>(`${this.apiUrl}/Movies`).pipe(
      map(movies => movies.filter(movie => movie.genres.some(genre => genre.genreId === genreId)))
    )
  }

  // GET videos
  getMovieVideos(id: number): Observable<string | undefined> {
    return this.http.get<string>(`${this.apiUrl}/Movies/${id}/videos`, {responseType: 'text' as 'json'});

  }

  toggleFavoritesList(item: MovieDto): void {
    const index = this.favoriteItemsList.findIndex(movie => movie.id === item.id);
    //condition to add to the list
    if (index > -1) {
      this.favoriteItemsList.splice(index, 1);
    } else {
      this.favoriteItemsList.push(item);
    }
  }

  isInFavorite(movie:MovieDto) : boolean {
    return this.favoriteItemsList.some(showItem => showItem.id === movie.id);
  }

  addToFavoritesList(movie: MovieDto): void {
    this.favoriteItemsList.push(movie);
  }

  removeFromFavoritesList(movie: MovieDto): void {
    const id = this.favoriteItemsList.findIndex(showItem => showItem.id === movie.id);
    if (id !== -1) {
      this.favoriteItemsList.splice(id, 1);
    }
  }
}
