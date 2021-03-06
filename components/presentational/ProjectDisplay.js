import React from 'react';

export default function ProjectDisplay({ project }) {
  const projectTechSummary = project.technology.map(techKey => {
    return <li>{techKey}</li>;
  });

  return (
    <div className="photo">
      <div className="image">{id}</div>

      <div className="sidebar">
        <ul className="sidebarList">
          <li>{projectTechSummary}</li>
        </ul>
      </div>

      <style jsx>
        {`
          .photo {
            width: 800px;
            overflow: hidden;
            height: 500px;
            display: inline-block;
          }

          .image {
            float: right;
            width: 600px;
            height: 500px;
            background: #333;
            color: #fff;
            text-align: center;
            vertical-align: middle;
            line-height: 500px;
            font-size: 40px;
          }

          .sidebar {
            float: left;
            background: #fff;
            width: 200px;
            height: 500px;
            text-align: left;
            box-sizing: border-box;
            padding: 20px;
            font-family: Monaco;
            font-size: 11px;
          }

          .sidebarList {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
