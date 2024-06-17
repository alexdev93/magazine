import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';

const AppBarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon fontSize="small" />, path: '/' },
    { text: 'Articles', icon: <DescriptionIcon fontSize="small" />, path: '/articles' },
    { text: 'About', icon: <InfoIcon fontSize="small" />, path: '/about' },
    { text: 'Contact', icon: <ContactMailIcon fontSize="small" />, path: '/contact' },
    { text: 'Create Article', icon: <CreateIcon fontSize="small" />, path: '/create-article' },
  ];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <AppBar position={isMobile ? 'static' : 'sticky'} sx={{ top: 0, zIndex: 1201, transition: '0.3s' }}>
      <Toolbar sx={{ maxWidth: '95%', margin: '0 auto', justifyContent: 'space-between' }}>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Real Estate Magazine
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              Real Estate Magazine
            </Typography>
            <List component="nav" sx={{ display: 'flex', gap: '20px' }}>
              {menuItems.map((item) => (
                <ListItem key={item.text} button component={Link} to={item.path}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Toolbar>
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          {list()}
        </Drawer>
      )}
    </AppBar>
  );
};

export default AppBarComponent;
