import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Header = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '10px 0',
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

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Header>
          <Typography variant="h4">ይመዝገቡ</Typography>
        </Header>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} maxWidth="md">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
