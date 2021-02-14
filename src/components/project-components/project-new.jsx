import React, { useState } from 'react';
import { Typography, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectForm from './project-form';

const { Title } = Typography;

const ProjectNew = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCreate = (values) => {
    props.onCreate(values);
    setModalVisible(false);
  };

  return (
    <>
      <div
        className="card__project project__new"
        onClick={() => setModalVisible(true)}
      >
        <div className="project__new__logo">
          <PlusOutlined />
        </div>
        <Title level={5} type="secondary">
          Add New Project
        </Title>
      </div>
      <Modal
        title="Add New Project"
        centered
        visible={modalVisible}
        footer={null}
      >
        <ProjectForm onCreate={onCreate} onCancel={() => setModalVisible(false)} />
      </Modal>
    </>
  );
};

export default ProjectNew;
