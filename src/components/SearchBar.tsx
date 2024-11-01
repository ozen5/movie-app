import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setSearchQuery, fetchMovies } from '../redux/moviesSlice';
import { AppDispatch } from '../redux/store';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    dispatch(setSearchQuery(event.target.value));
    dispatch(fetchMovies(event.target.value));
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '900px',
        margin: '20px auto',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #e3f2fd, #90caf9)',
        padding: '2px',
      }}
    >
      <TextField
        placeholder="Поиск фильмов"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: '#1565c0' }} />
            </InputAdornment>
          ),
          sx: {
            bgcolor: 'white',
            borderRadius: '8px',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          },
        }}
        sx={{
          '& .MuiInputLabel-root': {
            color: '#1565c0',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#0d47a1',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
