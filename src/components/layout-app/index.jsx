import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const LayoutApp = ({ children }) => {
  return (
    <Layout>
      <Header className="header__main">header</Header>
      <Content className="content">{children}</Content>
      <Footer className="footer text__small">
        <Text>
          &#169; 2021 - Powered by{' '}
          <span className="footer__powered-by">Petrolern LLC</span>
        </Text>
        {/* <Title level={5}>h2. Ant Design</Title> */}
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
