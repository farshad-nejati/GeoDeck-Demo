import React from 'react';
import { Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ProjectNew = () => {
  return (
    <div className="card__project project__new">
      <div className="project__new__logo">
        <PlusOutlined />
      </div>
      <Title level={5} type="secondary">
        Add New Project
      </Title>
    </div>
  );
};

export default ProjectNew;
