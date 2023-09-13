const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you're sending cookies or authentication headers
}));

const taxData = require('./rates.json');


// Define routes here
app.get('/api/data', async (req, res) => {
  try {
    
    // Send tax rate data to frontend
    res.json(taxData);
  } catch (error) {
    console.error('Error fetching tax rate data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
