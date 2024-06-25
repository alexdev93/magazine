import React from 'react';
import Main from '../components/Main';
import Enterprenur from '../components/Enterprenur';
import AdPlaceholders from '../components/AdPlaceholders';
import TopProperties from '../components/TopProperties';
import Feature from '../components/Feature';
import MainArticleAndProjects from '../components/MainArticleAndProjects';
import Form from '../components/Form';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '90%',
        '& > *:not(:last-child)': {
          marginBottom: theme.spacing(10),
        },
      }}
    >
      <Main />
      <AdPlaceholders />
      <Enterprenur />
      <TopProperties />
      <Feature />
      <MainArticleAndProjects />
      <Form />
    </Box>
  );
};
