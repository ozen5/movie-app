import axios from 'axios';
import { MoviesResponse, Movie } from '../types/movieTypes';

const API_KEY = '7e59b8de';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (title: string): Promise<MoviesResponse> => {
    const response = await axios.get(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
    return response.data;
};

export const getMovieDetails = async (id: string): Promise<Movie> => {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
};