import { TestBed } from '@angular/core/testing';

import { TvshowsService } from './tvshows.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { tvShowDto } from '../models/tvshow';

describe('TvshowsService', () => {
  let service: TvshowsService;
  let httpTestingController: HttpTestingController;
  let httpMock: HttpTestingController;
  const mockUrl = 'https://localhost:7249/api';

  const mockTvShows: tvShowDto[] =[
      {
      "title": "Los expedientes secretos X",
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      "rating": 8.6,
      "votes": 252000,
      "releaseDate": "10.09.1993",
      "description": "Dos agentes del FBI, el creyente Fox Mulder y la escéptica Dana Scully investigan lo extraño e inexplicable mientras que fuerzas oscuras impiden sus esfuerzos.",
      "featured": true,
      "id": 20,
      "type": "popular",
      "genres": [],
      "videoUrl":""

      },

      {
      "title": "Fallout",
      "imageUrl": "https://i.ebayimg.com/00/s/MTYwMFgxMTMx/z/NX0AAOSwdwZmHQJP/$_57.PNG?set_id=8800005007",
      "rating": 6.3,
      "votes": 2150,
      "releaseDate": "10.04.2024",
      "description": " es una serie dramática de aventura y ciencia-ficción basada en una de las franquicias de videojuegos más conocidas de todos los tiempos. Nos situamos en un mundo donde ya no queda casi nada, 200 años después del apocalipsis nuclear ocurrido en el año 2077.",
      "featured": true,
      "id": 22,
      "type": "popular",
      "genres":[],
      "videoUrl":""

      },

      {
      "title": "Black Summer",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIFPtJDDeVz6Cacy1cX1JTrdtzOL0MrsYtw&s",
      "rating": 6.3,
      "votes": 3575,
      "releaseDate": "10.07.2019",
      "description": "En los primeros y confusos días de un apocalipsis zombi, completos desconocidos deben aliarse para hacerse fuertes y regresar con sus seres queridos. Precuela de la serie 'Z Nation' producida por The Asylum para el canal Syfy",
      "featured": true,
      "id": 23,
      "type": "popular",
      "genres": [],
      "videoUrl":""

     },

      {
      "title": "Dr. Jekyll and Mr. Hyde",
      "imageUrl": "https://i.ebayimg.com/images/g/bZoAAMXQUShQ8OnQ/s-l600.jpg",
      "rating": 4.6,
      "votes": 1364,
      "releaseDate": "17.05.2008",
      "description": "El Dr. Jekyll, incapaz de parar su transformación en el asesino Mr. Hyde, quiere que su abogado le asegure un juicio, un veredicto de culpabilidad y una ejecución rápida.",
      "featured": false,
      "id": 24,
      "type": "",
      "genres": [],
      "videoUrl":""

      },

  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvshowsService]
    });
    service = TestBed.inject(TvshowsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should get tv shows from  file', () => {
    service.getAllTvShows().subscribe(tvshows => {
      expect(tvshows).toEqual(mockTvShows.slice(0,2));
    });

    const req = httpTestingController.expectOne(`${mockUrl}/tvshows`);
    expect(req.request.method).toEqual('GET');
    req.flush({tvshows: mockTvShows});
  });
// get movie with id 1, have to check all later
it('should get movie by id from api file', () => {
  const id = 1;

  service.getTvShowById(id).subscribe(tvshows => {
    const expectedMovie = mockTvShows.find(m => m.id === +id) as tvShowDto;
    expect(tvshows).toEqual(expectedMovie);
  });
});

it('should get upcoming tvshows  when we dont have', () => {
  const mockMovies2: tvShowDto[]=

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

service.getUpcomingTvShows().subscribe(tvshow => {
  expect(tvshow).toBeTruthy();
  expect(tvshow.length).toBe(0);
});
const req = httpMock.expectOne(`${mockUrl}/Movies/upcoming`);
expect(req.request.method).toEqual('GET');
req.flush(mockMovies2);
});

  it('should get movie video by id from api', () => {
    const movieIndex = 1;
    const expectVideoUrl = mockTvShows.find(m => m.id === +movieIndex)?.videoUrl;

    service.getTvShowVideos(movieIndex).subscribe(video => {
      expect(video).toEqual(expectVideoUrl);
    });

    const req = httpMock.expectOne(`${mockUrl}/tvshows/videos`);
    expect(req.request.method).toEqual('GET');
    req.flush({mockTvShows});
  });
  }
)
