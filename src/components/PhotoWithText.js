import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import '../styles/PhototWithText.css';

const PhotoWithText = ({house}) => {
  const photo = {
    url: 'https://picsum.photos/600/400?image=10',
  };

  return (
    <Box sx={{ width: '100%', padding: 1 }}>
      <Card sx={{ width: '100%', margin: 'auto', boxShadow: 'none', border: '1px solid #ddd', borderRadius: 'none' }}>
        <CardMedia
          component="img"
          height="140"
          image={photo.url}
          alt={photo.title}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Grid container spacing={2} sx={{ width: '100%' }} >
            <Grid item xs={6} md={6}>
              <Typography fontWeight="bold" fontSize="14px" p={.5}>
                {house.location}
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography fontWeight="bold" fontSize="14px" p={.5}>
              {house.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid item xs={12} md={12}>
              <Typography fontWeight="bold" fontSize="14px" p={.5}>
              {house.details}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography fontWeight="bold" fontSize="14px" p={.2}>
                የቀረበው፡ከገበሬው ሪልስቴት
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PhotoWithText;
