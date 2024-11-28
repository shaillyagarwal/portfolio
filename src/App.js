import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase.js';
import Certifications from './components/Certifications';
import Contact from './components/Contact';




function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <ProjectShowcase />
            <Certifications />
            <Contact />
            
        </div>
    );
}

export default App;