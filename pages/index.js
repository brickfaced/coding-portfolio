import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getProjects () {
  return [
    { id: 'lendme', title: 'LendMe' },
    { id: 'pyface', title: 'PyFace' },
    { id: 'artsy', title: 'Artsy' }
  ]
}

const ProjectLink = ({ project }) => (
  <li>
    <Link as={`/p/${project.id}`} href={`/project?title=${project.title}`}>
      <a>{project.title}</a>
    </Link>
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

export default () => (
  <Layout>
    <h1>My Projects</h1>
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
  </Layout>
)
