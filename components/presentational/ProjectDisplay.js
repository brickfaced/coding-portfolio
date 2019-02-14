import React from 'react';

import Modal from './Modal';

const ProjectDisplay = (isHidden, project) => {
  const projectTechSummary = Object.keys(project.technology).map(techKey => {
    return <li>{techKey}</li>;
  });

  return (
    <Modal>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul>{projectTechSummary}</ul>
    </Modal>
  );
};

export default ProjectDisplay;
