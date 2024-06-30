import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import '@fontsource/roboto';
import { CircularProgress } from '@mui/material';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';
import { useAppContext } from './AppContext';
import Layout from './components/Layout';

const AppRoutes = () => {
  const { state, getArticles } = useAppContext();

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  if (state.loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
  );
};

export default AppRoutes;