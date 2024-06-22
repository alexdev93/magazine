import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const MainArticleAndProjects = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                        <Paper sx={{ padding: 2, textAlign: 'center', height: '50%' }}>
                            <Typography variant="h5" gutterBottom>
                                Main Article - Part 1
                            </Typography>
                            <Typography variant="body1">
                                This is the main article content. It occupies half of the available height on medium and larger screens.
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
                                    This is the first half of Part 2 of the main article content. This is the second half of Part 2 of the main article content.
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
                                    This is the second half of Part 2 of the main article content. This is the second half of Part 2 of the main article content.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
                <Paper sx={{ padding: 2, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Projects
                    </Typography>
                    <Typography variant="body1">
                        This section contains information about projects. It occupies 5 columns on medium and larger screens, and full width on small screens.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default MainArticleAndProjects;
