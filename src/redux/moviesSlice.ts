import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie, MoviesResponse } from '../types/movieTypes';
import { searchMovies, getMovieDetails } from '../api/api';
import { RootState } from './store';

const TMDB_API_KEY = 'edcd3741ba4091d79a3776df184e4203';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

interface MoviesState {
    movies: Movie[];
    selectedMovie: Movie | null;
    searchQuery: string;
    status: 'idle' | 'loading' | 'failed';
    trailerUrl: string | null;
}

const initialState: MoviesState = {
    movies: [],
    selectedMovie: null,
    searchQuery: '',
    status: 'idle',
    trailerUrl: null,
};


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (title: string) => {
        const response: MoviesResponse = await searchMovies(title);
        return response.Search || [];
    }
);

export const fetchMovieDetails = createAsyncThunk(
    'movies/fetchMovieDetails',
    async (id: string, { rejectWithValue }) => {
        try {
            const response: Movie = await getMovieDetails(id);
            const trailerResponse = await fetch(`${TMDB_BASE_URL}/movie/${id}/videos?api_key=${TMDB_API_KEY}`);
            const trailerData = await trailerResponse.json();
            const trailer = trailerData.results.find((video: any) => video.type === 'Trailer' && video.site === 'YouTube');
            const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;

            return { movie: response, trailerUrl };
        } catch (error) {
            return rejectWithValue('Ошибка при загрузке деталей фильма или трейлера');
        }
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
                state.status = 'idle';
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<{ movie: Movie; trailerUrl: string | null }>) => {
                state.selectedMovie = action.payload.movie;
                state.trailerUrl = action.payload.trailerUrl;
            })
            .addCase(fetchMovieDetails.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setSearchQuery } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.movies;
export const selectSelectedMovie = (state: RootState) => state.movies.selectedMovie;
export const selectSearchQuery = (state: RootState) => state.movies.searchQuery;
export const selectTrailerUrl = (state: RootState) => state.movies.trailerUrl;
export default moviesSlice.reducer;
