import React,{useEffect} from 'react';
import { List, ListItem, Container, Grid, useMediaQuery, useTheme, Box, Typography } from '@mui/material';
import PhotoWithText from '../components/PhotoWithText';
import { styled } from '@mui/system';
import { useAppContext } from '../AppContext';

const Header = styled(Box)(({ theme }) => ({
  width: '100%', // Ensure full width
  padding: '20px',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '5px',
    backgroundColor: '#000', // Adjust color as needed
    marginTop: '5px',
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const { state, getHouses } = useAppContext();
  const { houses } = state;

  useEffect(() => {
    getHouses();
  }, [getHouses]);

  return (
    <Grid item xs={12} md={3} sx={{ width: '100%' }}>
      <Header>
        <Typography variant="h4">የሚሸጡ ቤቶች</Typography>
      </Header>
      <Container
        style={{
          width: '100%', // Ensure full width
          padding: '8px 0',
          overflowY: 'auto',
          maxHeight: isMdScreen ? '80vh' : 'unset', // Use maxHeight on medium screens and larger
          minHeight: isMdScreen ? 'unset' : '50vh', // Use minHeight on small screens
          scrollbarWidth: 'thin',  // For Firefox
          scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent',  // For supported browsers
        }}
      >
        <List sx={{ width: '100%' }}> {/* Ensure full width */}
        {houses.map((house) => (
          <ListItem sx={{ width: '100%' }}> {/* Ensure full width */}
            <PhotoWithText house={house}/>
          </ListItem>
        ))}
        </List>
      </Container>
    </Grid>
  );
};

export default Sidebar;
