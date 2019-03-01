import React from 'react';
import Router from 'next/router';

import Modal from '../presentational/Modal';

const projectList = [
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

export default function Projects() {
  function dismissModal() {
    Router.push('/');
  }

  function showProject(e, id) {
    e.preventDefault();
    Router.push(`/?projectId=${id}`, `/project?id=${id}`);
  }

  const { url, projectList } = this.props;

  return (
    <div className="list">
      {url.query.projectId && <Modal id={url.query.projectId} onDismiss={() => dismissModal()} />}
      {projectList.map(project => (
        <div className="project">
          <a className="projectLink" href={`/project?id=${id}`} onClick={e => showProject(e, id)}>
            {project.id}
          </a>
        </div>
      ))}
      <style jsx>
        {`
          .list {
            padding: 50px;
            text-align: center;
          }

          .project {
            display: inline-block;
          }

          .projectLink {
            color: #333;
            verticalalign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }

          .projectLink:hover {
            bordercolor: blue;
          }
        `}
      </style>
    </div>
  );
}
