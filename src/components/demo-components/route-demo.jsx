import React from 'react';
import { Link } from 'react-router-dom';

const RouteDemo = () => (
  <>
    <Link style={{ padding: '8px' }} to="/demo">
      demo
    </Link>
    &nbsp;- &nbsp;
    <Link style={{ padding: '8px' }} to="/login">
      login
    </Link>
    &nbsp;- &nbsp;
    <Link style={{ padding: '8px' }} to="/register">
      Register
    </Link>
    &nbsp;- &nbsp;
    <Link style={{ padding: '8px' }} to="/main/2">
      Main
    </Link>
    &nbsp;- &nbsp;
    <Link style={{ padding: '8px' }} to="/gallery">
      Gallery
    </Link>
    &nbsp;- &nbsp;
    <Link style={{ padding: '8px' }} to="/project">
      Project ( height 100vh)
    </Link>{' '}
    &nbsp;- &nbsp;
    <Link style={{ padding: '8px' }} to="/reset-password">
      forget-pass
    </Link>{' '}
    &nbsp;- &nbsp;
    <Link style={{ padding: '8px' }} to="/reset-password/vnvlavnav">
      reset-pass
    </Link>
  </>
);

export default RouteDemo;
