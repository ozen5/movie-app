import { Key } from "react";

export interface Movie {
    imdbID: Key | null | undefined;
    id: number;
    Title: string;
    Poster: string;
    Rating: string;
    Genre: string;
    Year: string;
    Director: string;
    Plot: string;
}


export interface MoviesResponse {
    results: never[];
    Search: Movie[];
    totalResults: string;
    Response: string;
}
