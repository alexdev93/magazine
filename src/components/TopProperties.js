// TopProperties.js

import React from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import {styled } from '@mui/system';

const Header = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '20px',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '2px',
    backgroundColor: '#000', // Adjust color as needed
    marginTop: '5px',
  },
}));

const TopProperties = () => {
  return (
    <Grid container spacing={2} sx={{ margin: 5}}>
      <Header>
          <Typography variant="h4">Top Properties</Typography>
        </Header>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center', color: '#333', height: 400}}>Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center', color: '#333', height: 400}}>Item 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center', color: '#333', height: 400}}>Item 3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper style={{ padding: 20, textAlign: 'center', color: '#333', height: 400}}>Item 4</Paper>
      </Grid>
    </Grid>
  );
};

export default TopProperties;
