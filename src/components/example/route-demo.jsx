import React from 'react';
import { Link } from 'react-router-dom';

const RouteDemo = () => (
  <>
    <Link style={{ padding: '8px' }} to="/register">
      Register
    </Link>
    <Link style={{ padding: '8px' }} to="/main/2">
      Main
    </Link>
    <Link style={{ padding: '8px' }} to="/gallery">
      Gallery
    </Link>
    <Link style={{ padding: '8px' }} to="/project">
      Project
    </Link>
  </>
);

export default RouteDemo;
