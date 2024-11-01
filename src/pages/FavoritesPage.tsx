import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavoriteMovies } from '../redux/favoritesSlice';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import MovieCard from '../components/MovieCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoritesPage: React.FC = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Избранные фильмы</Typography>

      {favoriteMovies.length > 0 ? (
        <Grid container spacing={3}>
          {favoriteMovies.map(movie => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <MovieCard movie={movie} isFavoritePage={true} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5} textAlign="center">
          <FavoriteBorderIcon style={{ fontSize: 80, color: '#9e9e9e', marginBottom: 16 }} />

          <Typography variant="h5" gutterBottom>Список избранных фильмов пуст.</Typography>
          <Typography variant="body1" color="textSecondary">
            Добавьте свои любимые фильмы, чтобы не потерять их!
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/"
            style={{ marginTop: 24 }}
          >
            Вернуться на главную
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default FavoritesPage;
