import React from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
// import { Articles } from './pages/Articles';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/articles" element={<Articles />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
