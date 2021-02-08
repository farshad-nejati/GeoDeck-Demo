import React from 'react';
import { Typography } from 'antd';
const { Text, Title, Link } = Typography;

const TypographyDemo = () => (
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>&nbsp;&nbsp;
    <Text>Ant Design (default)</Text>&nbsp;&nbsp;
    <Text type="secondary">Ant Design (secondary)</Text>&nbsp;&nbsp;
    <Text type="success">Ant Design (success)</Text>&nbsp;&nbsp;
    <Text type="warning">Ant Design (warning)</Text>&nbsp;&nbsp;
    <Text type="danger">Ant Design (danger)</Text>&nbsp;&nbsp;
    <Text disabled>Ant Design (disabled)</Text>&nbsp;&nbsp;
    <Text mark>Ant Design (mark)</Text>&nbsp;&nbsp;
    <Text code>Ant Design (code)</Text>&nbsp;&nbsp;
    <Text keyboard>Ant Design (keyboard)</Text>&nbsp;&nbsp;
    <Text underline>Ant Design (underline)</Text>&nbsp;&nbsp;
    <Text delete>Ant Design (delete)</Text>&nbsp;&nbsp;
    <Text strong>Ant Design (strong)</Text>&nbsp;&nbsp;
    <Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Link>
  </>
);

export default TypographyDemo;
