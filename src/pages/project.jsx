import React, { useState } from 'react';
import ProjectCard from '@components/projeect-components/project-card';
import ProjectNew from '@components/projeect-components/project-new';
import { PageHeader } from 'antd';

const Project = (props) => {
  const [projects, setProjects] = useState(initialProjects);

  const onCreate = (values) => {
    const newProject = { ...values, time: '2/14/2021', source: 'project1.png' };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="project">
      <PageHeader title="Projects" />
      <div className="project__cards">
        {projects.map((project, index) => {
          console.log({ ...project });
          return <ProjectCard key={index} {...project} />;
        })}
        <ProjectNew onCreate={onCreate} />
      </div>
    </div>
  );
};

export default Project;

const initialProjects = [
  {
    id: 2,
    title: 'EAI Geo Model',
    time: '10/21/2020',
    url: 'http://web.com',
    username: 'web project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a web project',
    source: 'project1.png',
  },
  {
    id: 3,
    title: 'Surface Flow',
    time: '11/27/2020',
    url: 'http://mail.com',
    username: 'mail project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a mail project',
    source: 'project2.png',
  },
  {
    id: 4,
    title: 'Well Optimization',
    time: '12/01/2020',
    url: 'http://example.com',
    username: 'example project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a example project',
    source: 'project3.png',
  },
  {
    id: 5,
    title: '3D Overlays',
    time: '12/18/2020',
    url: 'http://archive.com',
    username: 'archive project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a archive project',
    source: 'project4.png',
  },
  {
    id: 6,
    title: 'Thermal Field Survey',
    time: '12/01/2020',
    url: 'http://example.com',
    username: 'example project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a example project',
    source: 'project5.png',
  },
];
