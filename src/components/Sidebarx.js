import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InfoIcon from '@mui/icons-material/Info';

const sidebarWidth = 240; // Width of the sidebar

const Sidebar = () => {
  const { archives, description, social, title } = {
    archives: [
      { title: "Archive 1", url: "https://example.com/archive1" },
      { title: "Archive 2", url: "https://example.com/archive2" },
      { title: "Archive 3", url: "https://example.com/archive3" },
    ],
    description: "This is the description for the sidebar.",
    social: [
      { icon: InfoIcon, name: "Information" },
      { icon: InfoIcon, name: "More Info" },
    ],
    title: "Main Title",
  };

  return (
    <Grid
      item
      xs={12} md={4}
      sx={{
        position: 'fixed',
        right: 0,
        top: 100, // Adjust top position to avoid header conflict (assuming header height)
        height: 'calc(100% - 200px)', // Adjust height to fit remaining viewport
        overflowY: 'auto',
        zIndex: 1000,
        backgroundColor: '#f0f0f0',
        borderLeft: '1px solid #ccc',
        width: sidebarWidth,
        padding: 2,
      }}
    >
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network, index) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={index}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon fontSize="small" />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
