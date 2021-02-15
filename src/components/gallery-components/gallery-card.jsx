import React from 'react';
import { Image } from 'antd';
import { BASE_URL } from '@app/constant';

const GalleryCard = (props) => {
  const { title, description, source, id } = props;
  return (
    <div className="card__gallery">
      <Image
        alt={title}
        src={`${BASE_URL}/gallery/${source}`}
      />
    </div>
  );
};

export default GalleryCard;
