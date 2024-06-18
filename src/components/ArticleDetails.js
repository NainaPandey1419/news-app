import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`API_ENDPOINT/article/${articleId}`); // Replace 'API_ENDPOINT' with your actual API endpoint
        setArticle(response.data);
      } catch (error) {
        setError('Error fetching article details');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.publishedAt}</p>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default ArticleDetails;
