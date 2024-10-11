const express = require('express');
const axios = require('axios');
const app = express();

let cachedNews = null;
let cacheTime = 0;

app.get('/api/news', async (req, res) => {
  if (cachedNews && Date.now() - cacheTime < 60000) {
    return res.json(cachedNews); // Serve cached data if within 1 minute
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey={YOUR_API_KEY}`
    );
    cachedNews = response.data;
    cacheTime = Date.now();
    res.json(cachedNews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
