import { TestBed } from '@angular/core/testing';

import { TvshowsService } from './tvshows.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { tvshow } from '../models/tvshow';

describe('TvshowsService', () => {
  let service: TvshowsService;
  let httpTestingController: HttpTestingController;
  const mockUrl = 'assets/tvshows.json';

  const mockTvShows: tvshow[] =[
      { 
      "title": "Los expedientes secretos X",
      "image": "https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      "rating": "8.6",
      "votes": "252000",
      "release_date": "10.09.1993",
      "description": "Dos agentes del FBI, el creyente Fox Mulder y la escéptica Dana Scully investigan lo extraño e inexplicable mientras que fuerzas oscuras impiden sus esfuerzos.",
      "featured": true,
      "index": 20,
      "type": "popular",
      "genre": "",
      "video":""

      },

      {
      "title": "Fallout",
      "image": "https://i.ebayimg.com/00/s/MTYwMFgxMTMx/z/NX0AAOSwdwZmHQJP/$_57.PNG?set_id=8800005007",
      "rating": "6.3",
      "votes": "2150",
      "release_date": "10.04.2024",
      "description": " es una serie dramática de aventura y ciencia-ficción basada en una de las franquicias de videojuegos más conocidas de todos los tiempos. Nos situamos en un mundo donde ya no queda casi nada, 200 años después del apocalipsis nuclear ocurrido en el año 2077.",
      "featured": true,
      "index": 22,
      "type": "popular",
      "genre": "",
      "video":""

      },
      
      {
      "title": "Black Summer",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIFPtJDDeVz6Cacy1cX1JTrdtzOL0MrsYtw&s",
      "rating": "6.3",
      "votes": "3575",
      "release_date": "10.07.2019",
      "description": "En los primeros y confusos días de un apocalipsis zombi, completos desconocidos deben aliarse para hacerse fuertes y regresar con sus seres queridos. Precuela de la serie 'Z Nation' producida por The Asylum para el canal Syfy",
      "featured": true,
      "index": 23,
      "type": "popular",
      "genre": "",
      "video":""
  
     },

      {
      "title": "Dr. Jekyll and Mr. Hyde",
      "image": "https://i.ebayimg.com/images/g/bZoAAMXQUShQ8OnQ/s-l600.jpg",
      "rating": "4.6",
      "votes": "1364",
      "release_date": "17.05.2008",
      "description": "El Dr. Jekyll, incapaz de parar su transformación en el asesino Mr. Hyde, quiere que su abogado le asegure un juicio, un veredicto de culpabilidad y una ejecución rápida.",
      "featured": false,
      "index": 24,
      "type": "",
      "genre": "",
      "video":""

      },

      {
      "title": "Drive",
      "image": "https://m.media-amazon.com/images/I/91vya3UmldL._AC_UF894,1000_QL80_.jpg",
      "rating": "7.8",
      "votes": "707997",
      "release_date": "10.07.2015",
      "description": "Durante el día, Driver trabaja en un taller y es conductor especialista de cine, pero, algunas noches de forma esporádica, trabaja como chófer para delincuentes. Shannon, su mentor y jefe, que conoce bien su talento al volante, le busca directores de cine y televisión o criminales que necesiten al mejor conductor para sus fugas, llevándose la correspondiente comisión. Pero el mundo de Driver cambia el día en que conoce a Irene, una guapa vecina que tiene un hijo pequeño y a su marido en la cárcel. ",
      "featured": true,
      "index": 25,
      "type": "popular",
      "genre": "",
      "video":""
      },

      {
      "title": "Un lugar en silencio",
      "image": "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/654341.jpg",
      "rating": "7.5",
      "votes": "59732",
      "release_date": "06.04.2018",
      "description": "En un mundo invadido y arrasado por unos letales extraterrestres que se guían por el sonido, Evelyn y Lee Abbott sobreviven con sus hijos en una granja aislada en el bosque, sumidos en el más profundo silencio. Mientras no hagan ruido, estarán a salvo.",
      "featured": false,
      "index": 26,
      "type": "",
      "genre": "",
      "video":""

      },

      {
      "title": "Jeruzalem",
      "image": "https://cdn.sincroguia.tv/uploads/programs/j/e/r/jeruzalem-1023009_SPA-25.jpg",
      "rating": "4.8",
      "votes": "11062",
      "release_date": "10.07.2015",
      "description": "Two American tourists (Yael Grobglas, Danielle Jadelyn) and an anthropology student (Yon Tumarkin) fight for their lives when winged demons invade Jerusalem.",
      "featured": false,
      "index": 27,
      "type": "popular",
      "genre": "",
      "video":""
  
      },

      {
      "title": "Deadpool & Wolverine",
      "image": "https://m.media-amazon.com/images/I/81FQBhYvaxL.jpg",
      "rating": "7",
      "votes": "120",
      "release_date": "01.08.2024",
      "description": "Tercera entrega de la saga 'Deadpool', ahora integrada en el Universo Cinematográfico de Marvel (MCU) pero manteniendo su enfoque para adultos, con calificación R. En septiembre de 2022 se confirmó la aparición de Hugh Jackman como Lobezno, por primera vez desde 'Logan'.",
      "featured": false,
      "index": 28,
      "type": "upcoming",
      "genre": "",
      "video":""
  
      },

      {
      "title":"El Exorcismo de Georgetown",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSds6kj6dJLtL2cCEwMwKHeFM2mCbuE-ZQezg&s",
      "rating": "4.3",
      "votes": "250",
      "release_date": "01.08.2024",
      "description": "Un actor con problemas comienza a exhibir un comportamiento disruptivo mientras filma una película de terror. Su hija distanciada se pregunta si está deslizándose de nuevo en sus adicciones pasadas o si hay algo más siniestro en juego.",
      "featured": false,
      "index": 29,
      "type": "upcoming",
      "genre": "",
      "video":""
  
      },

      {
      "title":"Mascotas en apuros",
      "image": "https://www.imagemfilmeslatam.com/micrositios/mascotas-en-apuros/poster_final.jpg",
      "rating": "4.2",
      "votes": "250",
      "release_date": "01.08.2024",
      "description": "Mascotas Gracie y Pedro se separan de los dueños durante el traslado. Viajeron enfrentando desafíos, ayudados por la canción viral de los dueños, encontrándose con personajes hasta reunirse con Sophie y Gavin, encontrando el camino a casa.",
      "featured": false,
      "index": 30,
      "type": "upcoming",
      "genre": "",
      "video":""
  
      },

      {
      "title":"Mascotas en apuros",
      "image": "https://www.imagemfilmeslatam.com/micrositios/mascotas-en-apuros/poster_final.jpg",
      "rating": "4.2",
      "votes": "250",
      "release_date": "01.08.2024",
      "description": "Mascotas Gracie y Pedro se separan de los dueños durante el traslado. Viajeron enfrentando desafíos, ayudados por la canción viral de los dueños, encontrándose con personajes hasta reunirse con Sophie y Gavin, encontrando el camino a casa.",
      "featured": false,
      "index": 31,
      "type": "upcoming",
      "genre": "",
      "video":""
  
      },

      {
      "title":"Mascotas en apuros",
      "image": "https://www.imagemfilmeslatam.com/micrositios/mascotas-en-apuros/poster_final.jpg",
      "rating": "4.5",
      "votes": "250",
      "release_date": "01.08.2024",
      "description": "Mascotas Gracie y Pedro se separan de los dueños durante el traslado. Viajeron enfrentando desafíos, ayudados por la canción viral de los dueños, encontrándose con personajes hasta reunirse con Sophie y Gavin, encontrando el camino a casa.",
      "featured": false,
      "index": 32,
      "type": "upcoming",
      "genre": "",
      "video":""
  
      },

      {
      "title":"Mascotas en apuros",
      "image": "https://www.imagemfilmeslatam.com/micrositios/mascotas-en-apuros/poster_final.jpg",
      "rating": "4.2",
      "votes": "250",
      "release_date": "01.08.2024",
      "description": "Mascotas Gracie y Pedro se separan de los dueños durante el traslado. Viajeron enfrentando desafíos, ayudados por la canción viral de los dueños, encontrándose con personajes hasta reunirse con Sophie y Gavin, encontrando el camino a casa.",
      "featured": false,
      "index": 33,
      "type": "upcoming",
      "genre": "",
      "video":""
  
      }
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

   it('should get tv shows from json file', () => {
    service.getTvShowsByType('popular',2).subscribe(tvshows => {
      expect(tvshows).toEqual(mockTvShows.slice(0,2));
    });
    
    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('GET');
    req.flush({tvshows: mockTvShows});
  });
});
