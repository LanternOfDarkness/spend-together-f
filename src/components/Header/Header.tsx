// src/components/Header/Header.tsx

import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './Header.scss';

interface NavLink {
  to: string;
  label: string;
  requiresAuth?: boolean;
}

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    // TODO: implement authentication check
    setIsLoggedIn(true);
  }, []);

  const navLinks: NavLink[] = [
    { to: '/budget-planning', label: 'Planning Budget', requiresAuth: true },
    { to: '/history', label: 'History / Statistics', requiresAuth: true },
    { to: '/add-expenses', label: 'Add Expenses / Incomes', requiresAuth: true },
    { to: '/help', label: 'Help' },
    { to: '/about', label: 'About' }
  ];

  const profileMenuItems = [
    { to: '/profile', label: 'Profile' },
    { to: '/logout', label: 'Logout' }
  ];

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="header-container" sx={{ color: 'text.primary' }}>
      <AppBar className="app-bar">
        <Toolbar className="toolbar">
          <Box className="logo-container">
            <Link to="/">
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
            {navLinks.map((link) => (
              (!link.requiresAuth || isLoggedIn) && (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              )
            ))}
          </Box>

          <Box className="auth-container">
            {!isLoggedIn ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            ) : (
              <>
                <IconButton color="inherit" onClick={handleProfileClick}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu 
                  anchorEl={anchorEl} 
                  open={Boolean(anchorEl)} 
                  onClose={handleMenuClose}
                  MenuListProps={{ sx: { backgroundColor: 'background.paper' } }}
                >
                  {profileMenuItems.map((item) => (
                    <MenuItem key={item.to} onClick={handleMenuClose}>
                      <Link to={item.to} className="menu-link">
                        {item.label}
                      </Link>
                    </MenuItem>
                  ))}
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