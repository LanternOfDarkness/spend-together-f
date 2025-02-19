// src/components/Header/Header.tsx

import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // useEffect(() => {
  //   const user = localStorage.getItem('user');
  //   setIsLoggedIn(!!user);
  // }, []);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          <Box className="links-container">
            
          </Box>
          <Box className="buttons-container">
          {!isLoggedIn ? (
              <>
                <Button sx={{color: 'text.primary'}}>Login</Button>
                <Button sx={{color: 'text.primary'}}>Sign Up</Button>
              </>
            ) : (
              <>
                <IconButton color="inherit" onClick={handleProfileClick}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
