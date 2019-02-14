import React from 'react';

const ProjectLink = ({ project }) => (
  <li>
    {project.title}
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }
      `}
    </style>
  </li>
);

export default ProjectLink;
