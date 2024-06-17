// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

const propertyData = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    image: 'https://via.placeholder.com/600x400',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel turpis condimentum.'
  },
  {
    id: 2,
    title: 'Luxury Villa with Ocean View',
    image: 'https://via.placeholder.com/600x400',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
  {
    id: 3,
    title: 'Cozy Suburban House',
    image: 'https://via.placeholder.com/600x400',
    description: 'Vestibulum consequat urna vel fermentum commodo. Ut rhoncus purus eget purus convallis, nec varius dolor finibus.'
  }
];

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Welcome to our Real Estate Website
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {propertyData.map((property) => (
          <Grid item key={property.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {property.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
