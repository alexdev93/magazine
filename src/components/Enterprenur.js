import React from 'react';
import { Paper, Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';

const adPlaceholderStyle = {
  height: 60,
  backgroundColor: '#ddd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

const adImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};


const Enterprenur = () => {
  return (
    <Grid container spacing={2}>
      {/* First Grid Component (4-column) */}
      <Grid item xs={4}>
        <Card style={{ minHeight: '300px' }}>
          {/* Content for the first card */}
          <CardMedia
            component="img"
            image="url_to_your_image1.jpg"
            alt="Image 1"
            style={{ height: 250 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Card 1
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Second Grid Component (8-column) */}
      <Grid item xs={8}>
        <Paper style={{ padding: 10 }}>
          <Grid container spacing={2}>
            {/* First sub-grid item (takes 3/4 of space) */}
            <Grid item xs={9}>
              <Card style={{ height: '100%' }}>
                {/* Nested Grid for two cards side by side */}
                <Grid container spacing={2}>
                  {/* First Card */}
                  <Grid item xs={6}>
                    <Card style={{ height: '100%' }}>
                      {/* Content for the first card */}
                      <CardMedia
                        component="img"
                        image="url_to_your_image1.jpg"
                        alt="Image 1"
                        style={{ height: 140 }}
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  {/* Second Card */}
                  <Grid item xs={6}>
                    <Card style={{ height: '100%' }}>
                      {/* Content for the second card */}
                      <CardMedia
                        component="img"
                        image="url_to_your_image2.jpg"
                        alt="Image 2"
                        style={{ height: 140 }}
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* Second sub-grid item (takes 1/4 of space) */}
            <Grid item xs={3}>
              <Card style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  image="url_to_your_image.jpg"
                  alt="Your Image"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={adPlaceholderStyle}>
                <img src="https://cdn.jsdelivr.net/gh/alexdev93/kegeberew-photo-gallery/home2.jpg" alt="Ad Space 1" style={adImageStyle} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={adPlaceholderStyle}>
                <img src="https://cdn.jsdelivr.net/gh/alexdev93/kegeberew-photo-gallery/home3.jpg" alt="Ad Space 2" style={adImageStyle} />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Enterprenur;
