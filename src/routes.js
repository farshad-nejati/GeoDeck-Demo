import React from "react";

const Login = React.lazy(() => import('@pages/login'));
const Register = React.lazy(() => import('@pages/register'));
const Main = React.lazy(() => import('@pages/main'));
const Gallery = React.lazy(() => import('@pages/gallery'));
const Project = React.lazy(() => import('@pages/project'));
const Demo = React.lazy(() => import('@pages/demo'));

const routes = [
  { path: '/', exact: true, name:"Login Page", component: Login },
  { path: '/login', exact: true, name:"Login Page", component: Login },
  { path: '/register', exact: true, name:"Register Page", component: Register },
  { path: '/main/:id', exact: true, name:"Main Page", component: Main },
  { path: '/gallery', exact: true, name:"Gallery Page", component: Gallery },
  { path: '/project', exact: true, name:"Project Page", component: Project },
  { path: '/demo', exact: true, name:"demo Page", component: Demo },
];

export default routes;