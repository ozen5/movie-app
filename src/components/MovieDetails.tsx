import React from 'react';
import { Movie } from '../types/movieTypes';
import { Typography, Box, Button } from '@mui/material';
import '../App.css';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <Box className="container">
      <Typography variant="h4" gutterBottom>{movie.Title}</Typography>
      <Box mb={2}>
        <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }} />
      </Box>
      <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" className="rating">Рейтинг: {movie.Rating}</Typography>
        <Typography variant="body1" className="genre">{movie.Genre}</Typography>
      </Box>
      <Typography variant="body1" color="textSecondary" gutterBottom>Год: {movie.Year}</Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>Режиссер: {movie.Director}</Typography>
      <Typography variant="body1" gutterBottom>Описание: {movie.Plot}</Typography>
      <Button variant="contained" color="primary">Смотреть трейлер</Button>
    </Box>
  );
};

export default MovieDetails;
