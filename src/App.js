import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import '@fontsource/roboto';
import AppRoutes from './AppRoutes';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </AppProvider>
  );
};


export default App;
