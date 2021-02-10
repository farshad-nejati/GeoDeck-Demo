import React from 'react';
import { Avatar, Button, Card, Col, Row, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';

const CardDemo = () => (
  <>
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
    <Card
      className="card__gallery"
      bordered={false}
      style={{ width: 300, marginTop: 16 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Card title" description="This is the description" />
    </Card>
  </>
);

export default CardDemo;
