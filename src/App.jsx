// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/thank-you">
              Thank You
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content of the Home page (App component) */}
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the website!</p>
      </div>
    </div>
  );
};

export default App;
