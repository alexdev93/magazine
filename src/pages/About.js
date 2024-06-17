// src/pages/About.js
import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="body1" paragraph sx={{ lineHeight: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel turpis condimentum. Integer in lectus vitae magna dapibus scelerisque. Phasellus lobortis ac eros et congue. Aenean a nisl vitae libero mattis congue. Mauris dignissim ultricies nibh, ac venenatis sapien lacinia a. Fusce vulputate volutpat odio, non efficitur velit ullamcorper eget.
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 2 }}>
        Etiam sit amet lorem pretium, tristique purus eget, bibendum ipsum. Nullam quis tristique sem, sit amet tincidunt dolor. Vivamus eget nisl ligula. Duis tincidunt, est vel consectetur fermentum, nunc metus ultrices elit, nec tempor ligula lacus at tellus.
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 2 }}>
        Aliquam erat volutpat. In hac habitasse platea dictumst. Sed in sodales libero. Nulla ac diam sem. Fusce aliquet, odio vitae efficitur efficitur, quam lacus elementum magna, eget feugiat lectus quam nec ligula. Suspendisse potenti.
      </Typography>
    </Container>
  );
};

export default About;
