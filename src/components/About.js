import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography variant="body1">
        This is a simple React app that allows you to upload an image and process it using a REST API.
      </Typography>
    </Box>
  );
};

export default About;
