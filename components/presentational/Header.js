import React from 'react';

import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <p>Ramon Mendoza</p>
    </Link>
    <style jsx>
      {`
        a {
          text-decoration: none;
          color: blue;
          font-family: 'Arial';
          margin-right: 1000px;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </div>
);

export default Header;
