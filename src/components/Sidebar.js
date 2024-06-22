import React from 'react';
import { List, ListItem, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import PhotoWithText from '../components/PhotoWithText';

const Sidebar = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid item xs={12} md={3}>
      <Container
        style={{
          padding: 10,
          overflowY: 'auto',
          maxHeight: isMdScreen ? '80vh' : 'unset', // Use maxHeight on medium screens and larger
          minHeight: isMdScreen ? 'unset' : '50vh', // Use minHeight on small screens
          scrollbarWidth: 'thin',  // For Firefox
          scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent',  // For supported browsers
        }}
      >
        <List>
          <ListItem button>
            <PhotoWithText />
          </ListItem>
          <ListItem button>
            <PhotoWithText />
          </ListItem>
          {/* Add more ListItems as needed */}
        </List>
      </Container>
    </Grid>
  );
};

export default Sidebar;
