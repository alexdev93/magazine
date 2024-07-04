import React from 'react';
import Article from './Article'
import Sidebar from './Sidebar'
import { Grid, Container} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Main = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={9} style={{ position: 'relative' }} sx={{}}>
          <Container sx={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
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