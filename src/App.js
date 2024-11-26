import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;