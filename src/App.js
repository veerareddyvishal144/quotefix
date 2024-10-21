import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

const App = () => {
  return (
    <Router>
      <Box>
        {/* Navbar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React Image Upload
            </Typography>
            <Button color="inherit">
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            </Button>
          </Toolbar>
        </AppBar>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
