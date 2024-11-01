import React from 'react';
import { Container, Box,} from '@mui/material';
import SideMenu from '../components/SideMenu';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const HomePage: React.FC = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', gap: 4, pt: 4 }}>
      <SideMenu />
      <Box sx={{ flex: 1 }}>
        <SearchBar />
        <Box mt={3}>
          <MovieList />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
