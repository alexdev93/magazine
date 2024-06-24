import React from 'react';
import Article from './Article'
import Sidebar from './Sidebar'
import { Grid, Container, useTheme, useMediaQuery } from '@mui/material';

const Main = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={9} style={{ position: 'relative' }}>
          <Container sx={{
            minHeight: '80vh',
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
       <Sidebar/>
      </Grid>
    </>
  );
};

export default Main;  