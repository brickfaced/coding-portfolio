import React from 'react';
import ProjectDisplay from '../components/presentational/ProjectDisplay';

export default ({
  url: {
    query: { id }
  }
}) => (
  <div className="permalink">
    <div className="wrap">
      <ProjectDisplay project={project} />
    </div>
    <style jsx>
      {`
        .permalink {
          padding: 100px;
          text-align: center;
        }

        .wrap {
          display: inline-block;
          border: 1px solid #999;
          margin: auto;
        }
      `}
    </style>
  </div>
);
