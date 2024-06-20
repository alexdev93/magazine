import React from 'react';
import { Box, Grid} from '@mui/material';
import { adPlaceholderStyle, adImageStyle } from '../styles/mui.style';

const HorizontalAd = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box sx={adPlaceholderStyle}>
                        <img src="https://cdn.jsdelivr.net/gh/alexdev93/kegeberew-photo-gallery/home2.jpg" alt="Ad Space 1" style={adImageStyle} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HorizontalAd;
