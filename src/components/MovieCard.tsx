import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import { Movie } from '../types/movieTypes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favoritesSlice';

interface MovieCardProps {
  movie: Movie;
  isFavoritePage?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavoritePage = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetailsClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const handleAddToFavorites = () => {
    dispatch(addFavorite(movie));
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 300,
        margin: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #ffffff, #e0e0e0)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={movie.Poster}
        alt={movie.Title}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ padding: '16px', textAlign: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#1565c0' }}>
          {movie.Title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ marginBottom: '16px' }}>
          {movie.Year}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: 'column', alignItems: 'center', paddingBottom: '16px' }}>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
          Рейтинг: {movie.Rating || 'Нет рейтинга'}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Button
            size="small"
            variant="contained"
            onClick={handleDetailsClick}
            sx={{
              background: 'linear-gradient(145deg, #2196f3, #1e88e5)',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(145deg, #1e88e5, #1976d2)',
              },
            }}
          >
            Подробнее
          </Button>
          {!isFavoritePage && (
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={handleAddToFavorites}
              sx={{
                background: 'linear-gradient(145deg, #f50057, #c51162)',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(145deg, #c51162, #ad1457)',
                },
              }}
            >
              Добавить в избранное
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
