import React, { Component } from 'react';

import ProjectLink from '../presentational/ProjectLink';
import ProjectDisplay from '../presentational/ProjectDisplay';

function getProjects() {
  return [
    {
      id: 'pyface',
      title: 'PyFace',
      description: 'A face-scanning verficiation program built on Raspberry Pi',
      technology: ['Python', 'Raspberry Pi w/ Camera', 'AWS Rekognition', 'AWS DynamoDB', 'AWS S3']
    },
    {
      id: 'artsy',
      title: 'ARTSY',
      description:
        'An iOS art marketplace with emphasis on the "AR" in art. ARTSY allows you to preview and buy art true to scale in your house',
      technology: ['Swift', 'UI Storyboard', 'ARKit']
    },
    {
      id: 'awsom',
      title: 'AWSOM',
      description:
        'Want to get into music? AWSOM is a top of the line music teaching service that pairs you with great mentors that revolve around your needs',
      technology: [
        'React',
        'Bootstrap',
        'Node',
        'Express',
        'MongoDB',
        'Jest',
        'Google Maps API',
        'Google Calendar APIs'
      ]
    },
    {
      id: 'lendme',
      title: 'LendMe',
      description: 'An iOS application that helps college students look for tutors in their area',
      technology: ['Swift', 'UIStoryboard', 'CoreLocation', 'Alamofire', 'Stripe']
    }
  ];
}

class Projects extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>My Projects</h1>
        <ProjectDisplay />
        <ul>
          {getProjects().map(project => (
            <ProjectLink key={project.id} project={project} />
          ))}
        </ul>
        <style jsx>
          {`
            h1,
            a {
              font-family: 'Arial';
            }

            ul {
              padding: 0;
            }

            li {
              list-style: none;
              margin: 5px 0;
            }

            a {
              text-decoration: none;
              color: blue;
            }

            a:hover {
              opacity: 0.6;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Projects;
