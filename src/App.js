import React from 'react';
import { Home } from './pages/Home';
import Layout from './components/Layout';
import '@fontsource/roboto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
// import Articles from './pages/Articles';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/magazine" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/articles" element={<Articles />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
