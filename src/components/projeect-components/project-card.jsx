import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { BASE_URL } from '@app/constant';

const ProjectCard = (props) => {
  const { title, description, source, id } = props;
  return (
    <>
      <Link to={`/main/${id}`}>
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
      </Link>
    </>
  );
};

export default ProjectCard;
