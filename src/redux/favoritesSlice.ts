import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movieTypes';
import { RootState } from './store';

interface FavoritesState {
    favoriteMovies: Movie[];
}

const initialState: FavoritesState = {
    favoriteMovies: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movie>) => {
            if (!state.favoriteMovies.some(movie => movie.imdbID === action.payload.imdbID)) {
                state.favoriteMovies.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.imdbID !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectFavoriteMovies = (state: RootState) => state.favorites.favoriteMovies;

export default favoritesSlice.reducer;
