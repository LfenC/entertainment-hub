import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieDto} from '../models/movie';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  const mockUrl = 'https://localhost:7249/api';

  const mockMovies: MovieDto[] =[
    {
      "title": "Dawn of the dead",
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BN2M2ZmU2OGQtNmU5Yi00MTIyLTgwNWMtYjljMzZlYTdiNjBhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
       "rating": 6.3,
      "votes": 2150,
      "releaseDate": "06.03.2004",
      "description": "A struggling children's book author and his rebellious teenage daughter move into a house they've inherited and find mysterious dolls in the attic. The father and daughter soon learn that the dolls have a sinister - and deadly - past.",
      "featured": true,
      "id": 1,
      "type": "popular",
      "genres": [{genreId:1, name:'Horror'}],
      "videoUrl": "https://www.youtube.com/embed/DV8mJcuYVaA?si=qd376hLI6jXKYcti"

      },

      {
      "title": "Dolls",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Dollsposter1987.jpg/220px-Dollsposter1987.jpg",
      "rating": 6.3,
      "votes": 2150,
      "releaseDate": "06.03.1987",
      "description": "A struggling children's book author and his rebellious teenage daughter move into a house they've inherited and find mysterious dolls in the attic. The father and daughter soon learn that the dolls have a sinister - and deadly - past.",
      "featured": true,
      "id": 2,
      "type": "popular",
      "genres": [{genreId:1, name:'Horror'}],
      "videoUrl": "https://www.youtube.com/embed/aFaNbnLGRoM?si=UvjOAm9tU0RSzdaU"

      },

      {
      "title": "Jeruzalem",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSww2J5dbCGcb3q5MiMLcWxzCe4jTtR9xbQNw&s",
      "rating": 4.8,
      "votes": 11062,
      "releaseDate": "10.07.2015",
      "description": "Two American tourists (Yael Grobglas, Danielle Jadelyn) and an anthropology student (Yon Tumarkin) fight for their lives when winged demons invade Jerusalem.",
      "featured": true,
      "id": 3,
      "type": "popular",
      "genres": [{genreId:1, name:'Horror'}],
      "videoUrl": "https://www.youtube.com/embed/QTIwfN-4hZ4?si=ruNsluywAa5z9-rw"


      },

      {
      "title": "Dr. Jekyll and Mr. Hyde",
      "imageUrl": "https://i.ebayimg.com/images/g/bZoAAMXQUShQ8OnQ/s-l600.jpg",
      "rating": 4.6,
      "votes": 1364,
      "releaseDate": "17.05.2008",
      "description": "El Dr. Jekyll, incapaz de parar su transformación en el asesino Mr. Hyde, quiere que su abogado le asegure un juicio, un veredicto de culpabilidad y una ejecución rápida.",
      "featured": false,
      "id": 4,
      "type": "",
      "genres": [{genreId:1, name:'Horror'}],
      "videoUrl": "https://www.youtube.com/embed/cVoxDYv6Vi0?si=0nhiIh4a_DKXvxUv"

      },

      {
      "title": "Drive",
      "imageUrl": "https://m.media-amazon.com/images/I/91vya3UmldL._AC_UF894,1000_QL80_.jpg",
      "rating": 7.8,
      "votes": 707997,
      "releaseDate": "10.07.2015",
      "description": "Durante el día, Driver trabaja en un taller y es conductor especialista de cine, pero, algunas noches de forma esporádica, trabaja como chófer para delincuentes. Shannon, su mentor y jefe, que conoce bien su talento al volante, le busca directores de cine y televisión o criminales que necesiten al mejor conductor para sus fugas, llevándose la correspondiente comisión. Pero el mundo de Driver cambia el día en que conoce a Irene, una guapa vecina que tiene un hijo pequeño y a su marido en la cárcel. ",
      "featured": true,
      "id": 5,
      "type": "popular",
      "genres":[{genreId:9, name:'Acción'}],
      "videoUrl": "https://www.youtube.com/embed/KBiOF3y1W0Y?si=FXipzgFIK8iBKbvJ"

      },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all movies ', () => {
    service.getAllMovies().subscribe(movies => {
      expect(movies).toBeTruthy();
    });

    const req = httpMock.expectOne(`${mockUrl}/Movies`);
    expect(req.request.method).toEqual('GET');
    req.flush({mockMovies});
  });
  it('should get popular movies file', () => {
    service.getPopularMovies().subscribe(movies => {
      expect(movies).toBeTruthy();
      expect(movies.length).toBeGreaterThan(0);

    });

    const req = httpMock.expectOne(`${mockUrl}/Movies`);
    expect(req.request.method).toEqual('GET');
    req.flush({mockMovies});
  });

  it('should  get upcoming movies  when we have', () => {
    const upcomingMoviesR ={
      movies: mockMovies.filter(movie => movie.type === 'upcoming')
    }
    service.getUpcomingMovies().subscribe(movies => {
      expect(movies).toBeTruthy();
      expect(movies.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne(`${mockUrl}/Movies`);
    expect(req.request.method).toEqual('GET');
    req.flush(upcomingMoviesR);
  });


  it('should get upcoming movies  when we dont have', () => {
    	const mockMovies2: MovieDto[]=

      [
        {
          "id": 5,
          "title": "Longlegs: Coleccionaista de Almas",
          "description": "Lee Harker, agente del FBI, investiga varios casos con un denominador común: un hombre mató a su familia, se suicidó y dejó una nota con símbolos satánicos. Harker descubre otra serie de coincidencias aparentemente imposibles entre las matanzas.",
          "releaseDate": "2024-08-29T00:00:00",
          "rating": 7.1,
          "votes": 49000,
          "imageUrl": "https://m.media-amazon.com/images/M/MV5BNGVhYmMzODEtM2EwMy00NzE1LThkMDYtMzgwMDNlYTQwMzM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
          "videoUrl": "https://www.youtube.com/embed/OG7wOTE8NhE?si=sFauEo8ApVuPMFGf",
          "genres": [],
          "featured": true,
          "type":"",
        }
      ];

    service.getUpcomingMovies().subscribe(movies => {
      expect(movies).toBeTruthy();
      expect(movies.length).toBe(0);
    });
    const req = httpMock.expectOne(`${mockUrl}/Movies/upcoming`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockMovies2);
  });

  it('should get top rated movies from  file', () => {
    const topRatedMoviesR ={
      movies: mockMovies.filter (movie =>{
        return movie.rating >=5;
      }).slice(0,6)
    };

    service.getTopRatedMovies().subscribe(movies => {
      expect(movies).toBeTruthy();
      expect(movies.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne(`${mockUrl}/Movies/toprated`);
    expect(req.request.method).toEqual('GET');
    req.flush(topRatedMoviesR);
  });
// get movie with id 1, have to check all later
  it('should get movie by id from api file', () => {
    const id = 1;

    service.getMovieById(id).subscribe(movie => {
      const expectedMovie = mockMovies.find(m => m.id === +id) as MovieDto;
      expect(movie).toEqual(expectedMovie);
    });
  });

  it('should get movie video by id from api', () => {
    const movieIndex = 1;
    const expectVideoUrl = mockMovies.find(m => m.id === +movieIndex)?.videoUrl;

    service.getMovieVideos(movieIndex).subscribe(video => {
      expect(video).toEqual(expectVideoUrl);
    });

    const req = httpMock.expectOne(`${mockUrl}/Movies/videos`);
    expect(req.request.method).toEqual('GET');
    req.flush({mockMovies});
  });
  }
)
