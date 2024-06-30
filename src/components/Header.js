import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    { text: 'Articles', link: '/articles' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        border: 'none',
        borderTop: '1px solid lightgray',
        borderBottom: '1px solid lightgray'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.text} button component="a" href={item.link} onClick={toggleDrawer}>
                    <ListItemText primary={item.text} sx={{fontWeight: 700}}/>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            {menuItems.map((item, index) => (
              <Button
                key={item.text}
                color="inherit"
                href={item.link}
                sx={{ marginRight: index < menuItems.length - 1 ? 2 : 0, fontWeight: 600 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
