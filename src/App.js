import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Clients />
            <Footer />
        </div>
    );
}

export default App;