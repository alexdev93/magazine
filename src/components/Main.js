import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MainContent = () => {
  return (
    <Box component={Paper} elevation={3} p={2} sx={{ height: '100%', borderRadius: 0 }}>
      <Typography variant="h4" gutterBottom>
        Main Content
      </Typography>
      <Typography variant="body1">
        This is the main content area.
      </Typography>
    </Box>
  );
}

export default MainContent;
