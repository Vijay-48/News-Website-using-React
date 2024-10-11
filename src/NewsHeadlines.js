import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=3cebdbf28459452797b4d3bf23f17aed`
        );
        setHeadlines(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Latest News Headlines</h2>
      <ul>
        {headlines.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHeadlines;
