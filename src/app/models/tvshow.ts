export interface tvShowDto {
    title: string;
    imageUrl: string;
    rating: number;
    votes: number;
    releaseDate: string;
    description: string;
    featured: boolean;
    id: number;
    type: string;
    videoUrl: string;
    genres: TvShowGenresDto[];
  }
  export interface TvShowGenresDto{
    genreId: number;
    name: string;
  }
    //tvShowGenres: Genre[];
