import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SideMenu: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { text: 'Избранные', path: '/favorites', icon: <FavoriteIcon /> },
  ];

  return (
    <Box
      sx={{
        width: '220px',
        paddingTop: '20px',
        bgcolor: 'linear-gradient(135deg, #e3f2fd, #90caf9)',
        boxShadow: 4,
        borderRadius: '12px',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          paddingLeft: '16px',
          paddingBottom: '16px',
          fontWeight: 'bold',
          color: '#1565c0',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        Разделы
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              paddingLeft: '16px',
              marginY: '8px',
              borderRadius: '8px',
              transition: 'background-color 0.3s, transform 0.2s',
              '&:hover': {
                bgcolor: '#bbdefb',
                transform: 'scale(1.02)',
              },
              '&.Mui-selected': {
                bgcolor: '#bbdefb',
              },
            }}
          >
            <Link
              to={item.path}
              style={{
                textDecoration: 'none',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                color: '#0d47a1',
              }}
            >
              {item.icon}
              <ListItemText primary={item.text} sx={{ marginLeft: '8px' }} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;
