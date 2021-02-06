import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  console.log(props);
  return (
    <>
      <p>Login</p>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/main/2">Main</Link>
      <br />
      <Link to="/gallery">Gallery</Link>
      <br />
      <Link to="/project">Project</Link>
      <br />
    </>
  );
};

export default Login;
