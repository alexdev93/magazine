// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', marginTop: 'auto', backgroundColor: '#f1f1f1' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Real Estate Magazine. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
