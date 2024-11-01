import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import MovieCard from './MovieCard';
import { fetchMovies, selectMovies, selectSearchQuery } from '../redux/moviesSlice';
import { AppDispatch } from '../redux/store';
import { Movie } from '../types/movieTypes';

const defaultMovies: Movie[]= [
  {
    id: 1,
    imdbID: 'tt1201607',
    Title: 'Harry Potter and the Deathly Hallows: Part 2',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg',
    Rating: '8.1',
    Genre: 'Adventure, Fantasy',
    Year: '2011',
    Plot: 'The final confrontation between Harry Potter and Voldemort.',
    Director: 'David Yates',
  },
  {
    id: 2,
    imdbID: 'tt0816692',
    Title: 'Interstellar',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg',
    Rating: '8.6',
    Genre: 'Adventure, Drama, Sci-Fi',
    Year: '2014',
    Plot: 'A team of explorers travel through a wormhole in space to ensure humanity\'s survival.',
    Director: 'Christopher Nolan',
  },
  {
    id: 3,
    imdbID: 'tt0454921',
    Title: 'The Pursuit of Happyness',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX300.jpg',
    Rating: '8.0',
    Genre: 'Biography, Drama',
    Year: '2006',
    Plot: 'A struggling salesman takes custody of his son as he\'s poised to begin a life-changing professional endeavor.',
    Director: 'Gabriele Muccino',
  },
  {
    id: 4,
    imdbID: 'tt0903624',
    Title: 'The Hobbit: An Unexpected Journey',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg',
    Rating: '7.8',
    Genre: 'Adventure, Fantasy',
    Year: '2012',
    Plot: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home.',
    Director: 'Peter Jackson',
  },
  {
    id: 5,
    imdbID: 'tt0145487',
    Title: 'Spider-Man',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg',
    Rating: '7.3',
    Genre: 'Action, Adventure, Sci-Fi',
    Year: '2002',
    Plot: 'When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities.',
    Director: 'Sam Raimi',
  },
  {
    id: 6,
    imdbID: 'tt9362722',
    Title: 'Spider-Man: Across the Spider-Verse',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg',
    Rating: '8.9',
    Genre: 'Animation, Action, Adventure',
    Year: '2023',
    Plot: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    Director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
  },
  {
    id: 7,
    imdbID: 'tt1298650',
    Title: 'Pirates of the Caribbean: On Stranger Tides',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg',
    Rating: '6.6',
    Genre: 'Action, Adventure, Fantasy',
    Year: '2011',
    Plot: 'Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth.',
    Director: 'Rob Marshall',
  },
  {
    id: 8,
    imdbID: 'tt0988045',
    Title: 'Sherlock Holmes',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SX300.jpg',
    Rating: '7.6',
    Genre: 'Action, Adventure, Mystery',
    Year: '2009',
    Plot: 'Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.',
    Director: 'Guy Ritchie',
  },
];

const MovieList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector(selectMovies);
  const searchTerm = useSelector(selectSearchQuery);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchMovies(searchTerm));
    }
  }, [dispatch, searchTerm]);

  const moviesToDisplay = searchTerm ? movies : defaultMovies;

  return (
    <Grid container spacing={3}>
      {moviesToDisplay.length > 0 ? (
        moviesToDisplay.map(movie => (
          <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
            <MovieCard movie={movie} />
          </Grid>
        ))
      ) : (
        <Typography variant="body1" align="center" color="textSecondary" style={{ width: '100%' }}>
          Фильмы не найдены.
        </Typography>
      )}
    </Grid>
  );
};

export default MovieList;
