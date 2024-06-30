import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CircularProgress } from '@mui/material';
import { useAppContext } from '../AppContext';

const ArticleDetail = () => {
  const { id } = useParams();
  const { state, getArticle } = useAppContext();
  const { article, loading } = state;

  useEffect(() => {
    getArticle(id);
  }, [id, getArticle, loading]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <Card sx={{ maxWidth: { xs: '100%', md: '80%' }, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="400"
        image={article.imagePath}
        alt={article.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {article.content}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {article.releaseDate && new Date(article.releaseDate).toLocaleDateString()}
          {' | '}
          {article.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleDetail;
