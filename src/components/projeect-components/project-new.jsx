import React, { useState } from 'react';
import { Typography, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProjectModal from './project-modal';

const { Title } = Typography;

const ProjectNew = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default ProjectNew;
