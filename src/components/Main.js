import React from 'react';
import Article from './Article'
import Sidebar from './Sidebar'
import { Grid, Container} from '@mui/material';

const Main = () => {

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={9} style={{ position: 'relative' }}>
          <Container sx={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            margin: 0,
            paddingBottom: 10,
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