// src/pages/Articles.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { getArticles } from '../services/api';

const Articles = () => {
  let imageUrl = "https://cdn.jsdelivr.net/gh/alexdev93/kegeberew-photo-gallery";
  const [articles, setArticles] = useState([]);
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    getArticles().then(data => {
      const reversedData = data.reverse();
      setArticles(reversedData);
    });
  }, []);

  return (
    <Container style={{ padding: '20px 0' }}>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item key={article.id} xs={12} sm={6} md={index === 0 && !isTabletOrSmaller ? 12 : 4}>
            <Card sx={index === 0 && !isTabletOrSmaller ? { display: 'flex' } : null}>
              {index === 0 && (
                <Chip label="Breaking News" color="primary" sx={{ position: 'absolute', zIndex: 1, margin: '10px' }} />
              )}
              <CardMedia
                component="img"
                height="140"
                image={`${imageUrl}/${article.image}`}
                alt={article.title}
                sx={index === 0 && !isTabletOrSmaller ? { width: 140, flexShrink: 0 } : null}
              />
              <CardContent sx={index === 0 && !isTabletOrSmaller ? { flex: 1 } : null}>
                <Typography variant="h5" component="div" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;
