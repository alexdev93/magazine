// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';  // Import Home component
import Article from './pages/Article';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateArticle from './pages/CreateArticle';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Box sx={{ mx: { xs: 0, sm: 2, md: 4 }, minHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create-article" element={<CreateArticle />} />
          </Routes>
        </Container>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
