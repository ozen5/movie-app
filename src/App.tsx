import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { CssBaseline, Box } from '@mui/material';

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Box sx={{ bgcolor: '#eceff1', minHeight: '100vh' }}>
          <AppRoutes />
        </Box>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
