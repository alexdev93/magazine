import React from 'react';
import ReadMore from './ReadMore'
import { Box, Card, CardMedia, CardContent, Typography} from '@mui/material'
import '../styles/PhototWithText.css';

const PhotoWithText = () => {
  const photo = {
    url: 'https://picsum.photos/600/400?image=10',
  };

  const article = {
    title: 'The Beauty of Nature',
    body: 'Nature is the most beautiful and attractive surrounding around us which make us happy and provide us with natural environment to live healthily. Our nature provides us a variety of beautiful flowers, attractive birds, animals, green plants, blue sky, land, running rivers, sea, forests, air, mountains, valleys, hills and many more things. Our God has created a beautiful nature for the healthy living of us. All the things we use for our living are the assets of nature which we should not spoil and damage. We should be grateful to our nature for helping, caring and nurturing us like a mother.'
  };

  return (
    <Box sx={{ padding: 2 }}>
    <Card sx={{ width: '100%', margin: 'auto', boxShadow: 'none', border: '1px solid #ddd', borderRadius: 'none' }}>
      <CardMedia
        component="img"
        height="140"
        image={photo.url}
        alt={photo.title}
      />
      <CardContent>
        <Typography variant="h6" component="h6" gutterBottom>
          {article.title}
        </Typography>
        <ReadMore text={article.body} maxLength={100} />
      </CardContent>
    </Card>
  </Box>
  );
};

export default PhotoWithText;
