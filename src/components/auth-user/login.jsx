import React from 'react';
import { Avatar, Button, Card, Col, Row, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import Meta from 'antd/lib/card/Meta';
import ModalCustom from '../modal';

const Login = (props) => {
  console.log(props);
  return (
    <div
      style={{
        gridGap: '1rem',
        display: "grid",
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Login</p>
      {/* <DatePicker /> */}
      <br />

      <div>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
      </div>

      <Row style={{ padding: '16px 0' }}>
        <Button style={{ margin: '0 4px' }} type="primary">
          primary
        </Button>
        <Button style={{ margin: '0 4px' }} type="link">
          link
        </Button>
        <Button style={{ margin: '0 4px' }} type="text">
          text
        </Button>
        <Button style={{ margin: '0 4px' }} type="dashed">
          dashed
        </Button>
        <Button style={{ margin: '0 4px' }} type="ghost">
          ghost
        </Button>
        <Button style={{ margin: '0 4px' }} type="default">
          default
        </Button>
      </Row>
      <Row style={{ padding: '16px 0' }}>
        <Card
          bordered={false}
          style={{ width: 300, marginTop: 16 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Row>
      <Row style={{ padding: '16px 0' }}>
        <ModalCustom />
      </Row>

      <Link to="/register">Register</Link>
      <br />
      <Link to="/main/2">Main</Link>
      <br />
      <Link to="/gallery">Gallery</Link>
      <br />
      <Link to="/project">Project</Link>
      <br />
    </div>
  );
};

export default Login;
