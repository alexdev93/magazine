import React from 'react';
import AdPlaceholders from './AdPlaceholders';
import Header from './Header';
import Footer from './Footer'
import { Box, Typography } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <AdPlaceholders />
        <Typography variant="h4" component="h1" align="center" sx=
          {{
            padding: 1,
            fontWeight: 700, 
            letterSpacing: '0.1em',
          }}
          gutterBottom>
          Kegeberew RealEstate
        </Typography>
        <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '50%vh',
          '& > *': {
            margin: 0, // Reset margin for all direct children
            padding: 0, // Reset padding for all direct children
          },
        }}
      >
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;