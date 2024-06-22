// Feature.js

import React from 'react';
import { Grid, Paper, Box, Button, Typography } from '@mui/material';

const Feature = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} sm={6} md={8}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '800px',
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              '& iframe': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              },
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            padding: 2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90%',
            minHeight: '300px', // Ensure it has some height for centering
          }}
        >
          <Typography variant="h6" gutterBottom>
            Download Our Latest Magazine
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/path/to/your/magazine.pdf" // Replace with the actual path to your magazine file
            download
          >
            Download
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Feature;
