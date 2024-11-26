import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <h2 className="about-heading">About Me</h2>

                {/* Professional Summary */}
                <div className="about-section">
                    <h3>Professional Summary</h3>
                    <p>
                    Final-year Computer Science and Engineering student at Acharya Institute of Technology, Bangalore, with a strong foundation in Java, Python, and C/C++. Developed projects like a sentiment analysis model and a deep learning-based diagnostic tool for skin disease detection. Participated in hackathons and collaborated on innovative team solutions. Passionate about learning new technologies, with a focus on Machine Learning and software development. Eager to apply skills and grow in the tech industry.
                    </p>
                </div>

                {/* Core Skills */}
                <div className="about-section">
                    <h3>Core Skills</h3>
                    <ul className="skills-list">
                        <li><strong>Programming Languages:</strong> Java, Python, C/C++, React</li>
                        <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React</li>
                        <li><strong>Machine Learning:</strong> Data analysis, model development, and evaluation</li>
                        <li><strong>Database Management:</strong> SQL</li>
                    </ul>
                </div>

                {/* Achievements & Certifications */}
                <div className="about-section">
                    <h3>Achievements & Certifications</h3>
                    <ul className="achievements-list">
                        <li>Google Agile Project Management Certification</li>
                        <li>IBM Enterprise Data Science and AI Badge</li>
                        <li>Winner of Intercollege Coding and Debugging Competition</li>
                        <li>Certified in Web Development (IBM via Coursera)</li>
                        <li>Content Writer and Women Tech Maker at Developers Club</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
