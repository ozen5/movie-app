import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, selectSelectedMovie, selectTrailerUrl } from '../redux/moviesSlice';
import { AppDispatch, RootState } from '../redux/store';
import { Container, Typography, Box, Paper } from '@mui/material';
import '../App.css';

const MovieDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const movie = useSelector((state: RootState) => selectSelectedMovie(state));
    const trailerUrl = useSelector((state: RootState) => selectTrailerUrl(state));

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id));
        }
    }, [dispatch, id]);

    if (!movie) {
        return <Typography variant="h6" align="center">Загрузка...</Typography>;
    }

    return (
        <Container
            maxWidth="md"
            sx={{
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                background: 'linear-gradient(135deg, #e3f2fd, #90caf9)',
                marginTop: '40px',
                color: '#1565c0',
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                align="center"
                sx={{
                    fontWeight: 'bold',
                    color: '#0d47a1',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                }}
            >
                {movie.Title}
            </Typography>
            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
                gap={4}
                mt={4}
            >
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        width: '300px',
                        maxWidth: '100%',
                        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.4)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: '16px 16px 0 0',
                        }}
                    />
                </Paper>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: '16px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        <strong>Рейтинг:</strong> {movie.Rating}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Дата выхода:</strong> {movie.Year}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Жанр:</strong> {movie.Genre}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Режиссер:</strong> {movie.Director}
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                        <strong>Описание:</strong> {movie.Plot}
                    </Typography>
                </Box>
            </Box>
            {trailerUrl ? (
                <Box mt={6} display="flex" justifyContent="center" sx={{ boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)', borderRadius: '12px', overflow: 'hidden' }}>
                    <iframe
                        width="100%"
                        height="400"
                        src={trailerUrl}
                        title="Trailer"
                        frameBorder="0"
                        allowFullScreen
                        style={{
                            borderRadius: '12px',
                        }}
                    ></iframe>
                </Box>
            ) : (
                <Typography variant="body1" color="text.secondary" align="center" mt={4}>
                    Трейлер недоступен
                </Typography>
            )}
        </Container>
    );
};

export default MovieDetailsPage;
