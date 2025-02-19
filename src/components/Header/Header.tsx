// src/components/Header/Header.tsx

import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <Box className="header-container">
      <AppBar className="app-bar">
        <Toolbar className="toolbar">
          <Box className="logo-container">
            <Link to="/" className="link">
              <Box
                component="img"
                src="/assets/logo.ico"
                alt="Logo"
                className="logo-image"
              />
              <Typography variant="h6" className="logo-text">
                Spend Together
              </Typography>
            </Link>
          </Box>
          <Box className="buttons-container">
            <Button color="inherit" sx={{ color: 'black' }}>Login</Button>
            <Button color="primary" sx={{ ml: 2 }}>Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
