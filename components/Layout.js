import React from 'react';

import Header from './presentational/Header';

const Layout = element => {
  return (
    <div>
      <Header />
      {element.children}
      <style jsx>
        {`
          div {
            margin: 20px;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
