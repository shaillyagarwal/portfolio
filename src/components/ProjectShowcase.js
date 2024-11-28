import React from 'react';
import './ProjectShowcase.css';

const projects = [
  {
    name: 'Preliminary Skin Diagnosis',
    description:
      'An AI-powered diagnostic tool identifying skin diseases from images using machine learning and image segmentation.',
    techStack: ['Python', 'scikit-image', 'Neural Networks'],
    repoLink: 'https://github.com/shaillyagarwal/derma-main',
  },
  {
    name: 'Sentiment Analysis on Review Text',
    description:
      'Implemented a model to classify customer movie reviews using TF-IDF and Logistic Regression.',
    techStack: ['Python', 'Scikit-learn', 'Pipeline Processing'],
    repoLink: 'https://www.kaggle.com/code/shaillyagarwal/shailly-agarwal/edit',
  },
  {
    name: 'House Price Prediction Model',
    description:
      'Developed a machine learning model to predict house prices based on features such as location, size, and number of rooms.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Linear Regression', 'Random Forest'],
    repoLink: 'https://www.kaggle.com/code/shaillyagarwal/notebook7991b45617/edit',
  },
];

const ProjectShowcase = () => {
  return (
    <div id="projects" className="project-showcase">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech-stack">
              <strong>Tech Stack:</strong> {project.techStack.join(', ')}
            </p>
            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                Code Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
