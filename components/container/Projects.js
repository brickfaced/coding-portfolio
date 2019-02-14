import React, { Component } from 'react'

function getProjects () {
  return [
    {
      id: 'pyface',
      title: 'PyFace',
      description: 'A face-scanning verficiation program built on Raspberry Pi',
      technology: ''
    },
    {
      id: 'artsy',
      title: 'ARTSY',
      description: 'An iOS art marketplace with emphasis on the "ar" in art. As long as you have an augmented reality supported device, you can preview all the art true to scale in your house',
      technology: ''
    },
    {
      id: 'awsom',
      title: 'AWSOM',
      description: 'Want to get into music? AWSOM is a top of the line music teaching service that pairs you with great mentors that revolve around your needs',
      technology: ''
    },
    {
      id: 'lendme',
      title: 'LendMe',
      description: '',
      technology: 'An iOS application that helps college students look for tutors in their area'
    }
  ]
}

const ProjectLink = ({ project }) => (
  <li>
    {project.title}
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Projects = () => (
  <div>
    <h1>Projects</h1>
    <ul>
      {getProjects().map((project) => (
        <ProjectLink key={project.id} project={project} />
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
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
    `}</style>
  </div>
)

export default Projects