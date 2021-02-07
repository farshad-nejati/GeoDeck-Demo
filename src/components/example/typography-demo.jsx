import React from 'react';
import { Typography } from 'antd';
const { Text, Title } = Typography;

const TypographyDemo = () => (
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
    <Text>Ant Design (default)</Text>
  </>
);

export default TypographyDemo;
