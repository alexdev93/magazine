import React from 'react';
import Article from './Article'
import { Grid, Container, useTheme, useMediaQuery, Typography, Box } from '@mui/material';

export const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Typography variant="h4" component="h1" align="center" sx = 
      {{
         padding: 1
         }} 
         gutterBottom>
        Kegeberew RealEstate
      </Typography>
      <Grid container>
        <Grid item xs={12} md={9} style={{ position: 'relative' }}>
          <Container sx={{
            minHeight: '60vh',
            borderBottom: isSmallScreen ? '1px solid black' : 'none',
            borderRight: isSmallScreen ? 'none' : '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            marign: 0,
            padding: 0,
          }}
          >
            <Article />
          </Container>
        </Grid>

        <Grid item xs={12} md={3}>
          <Container style={{ minHeight: '70vh', backgroundColor: 'gray', padding: '20', }}>

          </Container>
        </Grid>
      </Grid>
    </>
  );
};
