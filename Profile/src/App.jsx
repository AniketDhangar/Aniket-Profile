import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ResponsiveDrawer from './Pages/ResponsiveDrawer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Footer from './Pages/Footer';
import React from 'react';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ResponsiveDrawer />
        <Box sx={{ mt: { xs: '56px', sm: '64px' } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
