import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Box component={Paper} elevation={3} p={2} sx={{ height: '100%', borderRadius: 0 }}>
      <Typography variant="h5" gutterBottom>
        Sidebar
      </Typography>
      <List>
        <ListItem button>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 3" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 4" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
