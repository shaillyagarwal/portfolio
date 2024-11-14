import React from 'react';
import './Home.css';

function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <h3>Hello,</h3>
                <h1>I'm <span className="highlight">Shailly Agarwal</span></h1>
                <h2>Software Engineer</h2>
                <h4> A tech enthusiast crafting innovative solutions to bridge the gap between technology and real-world impact.</h4>
                <button className="hire-me">Hire me</button>
            </div>
            <div className="home-image">
                <img src="/images/profile.jpeg" alt="Profile" />
            </div>
        </section>
    );
}

export default Home;