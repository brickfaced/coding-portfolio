import React from 'react';

import Modal from './Modal';

const ProjectDisplay = ({ isHidden, project }) => (
  <Modal>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <ul>
      {project.technology.map(tech => (
        <li>{tech}</li>
      ))}
    </ul>
  </Modal>
);

export default ProjectDisplay;
