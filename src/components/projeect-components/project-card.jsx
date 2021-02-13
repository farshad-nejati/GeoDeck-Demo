import React from 'react';
import { Avatar, Card, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { BASE_URL } from '@app/constant';

const ProjectCard = (props) => {
  const { title, description, source } = props;
  return (
    <>
      <Card
        className="card__project"
        bordered={false}
        //   style={{ width: 300, marginTop: 16 }}
        cover={<img alt={title} src={`${BASE_URL}/project/${source}`} />}
      >
        {/* <Skeleton loading={false} avatar active> */}
        <Meta title={title} description={description} />
        {/* </Skeleton> */}
      </Card>
    </>
  );
};

export default ProjectCard;
