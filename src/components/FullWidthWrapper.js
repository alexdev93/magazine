import React from 'react';
import { Box } from '@mui/material';

const FullWidthWrapper = ({ children }) => {
    return (
        <Box
        sx={{
          width: '100%',
          maxWidth: '50%vh',
          '& > *': {
            margin: 0, // Reset margin for all direct children
            padding: 0, // Reset padding for all direct children
          },
        }}
      >
        {children}
      </Box>
    );
  };
  
  export default FullWidthWrapper;