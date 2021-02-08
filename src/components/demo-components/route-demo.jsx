import React from 'react';
import { Link } from 'react-router-dom';

const RouteDemo = () => (
  <>
  <Link style={{ padding: '8px' }} to="/demo">
    demo
  </Link>
  &nbsp;

  
  <Link style={{ padding: '8px' }} to="/register">
      Register
    </Link>
    &nbsp;

    <Link style={{ padding: '8px' }} to="/main/2">
      Main
    </Link>
    &nbsp;
    <Link style={{ padding: '8px' }} to="/gallery">
      Gallery
    </Link>
    &nbsp;
    <Link style={{ padding: '8px' }} to="/project">
      Project
    </Link>
    &nbsp;
  </>
);

export default RouteDemo;
