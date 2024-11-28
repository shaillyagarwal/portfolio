import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase.js';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';




function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <ProjectShowcase />
            <ContactForm />
            <ResumeDownload />
            <Contact />
            
        </div>
    );
}

export default App;