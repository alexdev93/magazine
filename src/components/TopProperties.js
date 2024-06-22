// TopProperties.js

import React from 'react';
import { Grid, Paper } from '@mui/material';

const TopProperties = () => {
  return (
    <Grid container spacing={2}>
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
