import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

 const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>{"Spend Together"}</Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Header;