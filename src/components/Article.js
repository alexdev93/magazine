import React, { useRef } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Chip, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const cardsContent = {
  transition: 'all 0.1s ease',
  fontWeight: 600,
  '&:hover': {
    fontWeight: 500,
    textDecoration: 'underline',
    color: '#000',
  },
};

const Article = () => {
  const { state } = useAppContext();
  const { articles } = state;
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const reversedArticles = [...articles].reverse();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Grid container spacing={2} maxWidth="xl" style={{ width: '100%', padding: 0, margin: 0 }}>
        {reversedArticles.length > 0 && (
          <Grid item xs={12}>
            <Card
              sx={{
                width: '100%',
                marginBottom: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                border: 'none',
                borderRadius: 0,
                boxShadow: 'none',
                position: 'relative',
              }}
            >
              <Chip
                label="Latest News"
                color="primary"
                sx={{
                  position: 'absolute',
                  zIndex: 1,
                  margin: '10px',
                }}
              />
              <div style={{ position: 'relative', width: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={reversedArticles[0].imagePath}
                  sx={{ minWidth: '100%', width: '100%' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    zIndex: 2,
                  }}
                />
              </div>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" sx={cardsContent} gutterBottom>
                  <Link
                    to={`/article/${reversedArticles[0].id}`}
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    {reversedArticles[0].title.toUpperCase()}
                  </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {reversedArticles[0].content.substring(0, 150)}...
                  <Link
                    to={`/article/${reversedArticles[0].id}`}
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    Read More
                  </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {reversedArticles[0].releaseDate && new Date(reversedArticles[0].releaseDate).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
        <Grid item xs={12} style={{ position: 'relative' }}>
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              minHeight: '300px',
              position: 'relative',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            className="scrollable-container"
          >
            {reversedArticles.slice(1).map((article) => (
              <Card
                key={article.id}
                sx={{
                  // minWidth: 300,
                  width: isMobile ? '100%' : 300,
                  flex: '0 0 auto',
                  marginRight: 2,
                  minHeight: '100%',
                  border: 'none',
                  borderRadius: 0,
                  boxShadow: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={article.imagePath}
                  sx={{ width: '100%', marginBottom: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" sx={{ ...cardsContent, marginBottom: 2 }}>
                    <Link
                      to={`/article/${article.id}`}
                      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                    >
                      {article.title.toUpperCase()}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {article.content.substring(0, 150)}...
                    <Link
                      to={`/article/${article.id}`}
                      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                    >
                      Read More
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.releaseDate && new Date(article.releaseDate).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
            <IconButton aria-label="scroll left" onClick={scrollLeft}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
            <IconButton aria-label="scroll right" onClick={scrollRight}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <style jsx>{`
        .scrollable-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Article;
