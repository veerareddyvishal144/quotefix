
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Make the API call using axios
    axios
      .get('https://mocki.io/v1/b04a9787-4c97-4721-9dce-6cf2d326eacf')
      .then((response) => {
        setData(response.data); // Set the fetched data
        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        setError(error.message); // Set the error message
        setLoading(false); // Stop the loading state
      });
  }, []); // Empty array means this will run once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};


export default App;
