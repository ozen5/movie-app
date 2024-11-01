import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FavoritesPage from '../pages/FavoritesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/movie/:id" element={<MovieDetailsPage />} />
  </Routes>
);

export default AppRoutes;
