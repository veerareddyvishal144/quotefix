import React, { useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress, Box, Grid, Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setLoading(true);

    try {
      const response = await axios.post('https://api.example.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Assuming the API response returns an array of objects with id, name, and cost
      setData(response.data); // Set the array of objects to display in the card view
    } catch (error) {
      console.error('Error uploading image', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="contained" component="label" sx={{ margin: '20px' }}>
          Upload Image
          <input type="file" accept="image/*" hidden onChange={handleFileChange} />
        </Button>
        {loading && <CircularProgress />}
        <Button type="submit" variant="contained" color="primary" disabled={!file} sx={{ margin: '20px' }}>
          Submit
        </Button>
      </form>

      {/* Div and Card View for displaying results */}
      <Box sx={{ marginTop: '20px', width: '80%' }}>
        <Grid container spacing={2}>
          {data.length > 0 && data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2">
                    Cost: {item.cost}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
