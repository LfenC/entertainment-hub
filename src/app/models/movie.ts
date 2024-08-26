
export interface MovieDto {
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
    genres: MovieGenresDto[];
}

export interface MovieGenresDto{
  genreId: number;
  name: string;
}

