import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Header = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '10px 0',
    position: 'relative',
    '&::after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: '2px',
        backgroundColor: '#000', // Adjust color as needed
        marginTop: '5px',
    },
}));

const MainArticleAndProjects = () => {
    return (
        <Grid container  >
            <Grid item xs={12} md={7}>
                <Header>
                    <Typography variant="h4">ዋና ዋና</Typography>
                </Header>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                        <Paper sx={{  textAlign: 'center', height: '50%',borderRadius: 0, // Reset border radius
                                    boxShadow: 'none', }}>
                            <Typography variant="body1">
                                This is the main article content. It occupies half of the available height on medium and larger screens.This is the main article content. It occupies half of the available height on medium and larger screens.This is the main article content. It occupies half of the available height on medium and larger screens.This is the main article content. It occupies half of the available height on medium and larger screens.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} container spacing={2} direction="row" style={{ height: '50%' }}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    padding: 2,
                                    textAlign: 'center',
                                    height: '50%',
                                    borderRadius: 0, // Reset border radius
                                    boxShadow: 'none', // Reset box shadow
                                }}
                            >
                                <Typography>
                                    This is the first half of Part 2 of the main article content. This is the second half of Part 2 of the main article content.This is the second half of Part 2 of the main article contentart 2 of the art 2 of the art 2 of the art 2 of the art 2 of the 
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    padding: 2,
                                    textAlign: 'center',
                                    height: '50%',
                                    borderRadius: 0, // Reset border radius
                                    boxShadow: 'none', // Reset box shadow
                                }}
                            >
                                <Typography>
                                    This is the second half of Part 2 of the main article content. This is the second half of Part 2 of the main article content.art 2 of the art 2 of the art 2 of the art 2 of the art 2 of the art 2 of the art 2 of the art 2 of the art 2 of the art 2 of the art 2 of the 
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={5} sx={{padding: 5}}>
                <Header>
                    <Typography variant="h4">ፕሮጀክቶች</Typography>
                </Header>
                <Paper sx={{ padding: 2, textAlign: 'center',borderRadius: 0, // Reset border radius
                                    boxShadow: 'none', }}>
                    <Typography variant="body1">
                        This section contains information about projects. It occupies 5 columns on medium and larger screens, and full width on small screens.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default MainArticleAndProjects;
