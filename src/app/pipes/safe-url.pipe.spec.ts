import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from './safe-url.pipe';
import { TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';

const mockMoviesData ={
  movies :[
    {
    title: "Dawn of the dead",
    image: "https://m.media-amazon.com/images/M/MV5BN2M2ZmU2OGQtNmU5Yi00MTIyLTgwNWMtYjljMzZlYTdiNjBhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    rating: "6.3",
    votes: "2150",
    release_date: "06.03.2004",
    description: "A struggling children's book author and his rebellious teenage daughter move into a house they've inherited and find mysterious dolls in the attic. The father and daughter soon learn that the dolls have a sinister - and deadly - past.",
    featured: true,
    index: 1,
    type: "popular",
    genre: "Terror",
    video: "https://www.youtube.com/embed/DV8mJcuYVaA?si=qd376hLI6jXKYcti"
  },
  ]
};


describe('SafeUrlPipe', () => {  
  let sanitizer : DomSanitizer;
  let pipe: SafeUrlPipe;
  
  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService, SafeUrlPipe]
  });

    sanitizer = TestBed.inject(DomSanitizer);
    pipe = TestBed.inject(SafeUrlPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });


});
