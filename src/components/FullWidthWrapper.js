import React from 'react';
import AdPlaceholders from './AdPlaceholders';
import Header from './Header';
import Footer from './Footer'
import { Box, Typography } from '@mui/material';

const FullWidthWrapper = ({ children }) => {
    return (
        <Box
        sx={{
          width: '100%',
          maxWidth: '50%vh',
          '& > *': {
            margin: 0, // Reset margin for all direct children
            padding: 0, // Reset padding for all direct children
          },
        }}
      >
        <AdPlaceholders />
        <Typography variant="h4" component="h1" align="center" sx=
        {{
          padding: 1
        }}
        gutterBottom>
        Kegeberew RealEstate
      </Typography>
      <Header/>
        {children}
        <Footer/>
      </Box>
    );
  };
  
  export default FullWidthWrapper;