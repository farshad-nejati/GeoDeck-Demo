import React from "react";

const Login = React.lazy(() => import('components/auth-user/login'));
const Register = React.lazy(() => import('components/auth-user/register'));
const Main = React.lazy(() => import('components/main-page'));
const Gallery = React.lazy(() => import('components/gallery-view'));
const Project = React.lazy(() => import('components/project-page'));

const routes = [
  { path: '/', exact: true, name:"Login Page", component: Login },
  { path: '/login', exact: true, name:"Login Page", component: Login },
  { path: '/register', exact: true, name:"Register Page", component: Register },
  { path: '/main/:id', exact: true, name:"Main Page", component: Main },
  { path: '/gallery', exact: true, name:"Gallery Page", component: Gallery },
  { path: '/project', exact: true, name:"Project Page", component: Project },
];

export default routes;