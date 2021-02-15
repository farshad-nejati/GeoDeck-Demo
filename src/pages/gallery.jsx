import React, { useState } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Image, PageHeader } from 'antd';
import GalleryCard from '@components/gallery-components/gallery-card';
import GalleryAction from '@components/gallery-components/gallery-action';

const filters = [
  { filter: 'all', title: 'All' },
  { filter: 'img', title: 'Images' },
  { filter: 'video', title: 'Videos' },
];

const sorts = [
  { label: 'Default', key: 'default' },
  { label: 'Title', key: 'title' },
  { label: 'Date', key: 'date' },
];

const sourceToTag = (source) => {
  const images = ['jpg', 'gif', 'png'];
  const videos = ['mp4', '3gp', 'ogg', 'webm'];
  const extension = source ? source.split('.').pop() : null;

  if (videos.includes(extension)) {
    return 'video';
  } else if (images.includes(extension)) {
    return 'img';
  }
  return 'all';
};

const Gallery = (props) => {
  const [galleries, setGalleries] = useState(initialGalleries);
  const [active, setActive] = useState({ sort: 'default', filter: 'all' });
  const [currentGalleries, setCurrentGalleries] = useState(galleries);

  const onSort = (key) => {
    // console.log(`key: ${key}`);
    let newGalleries = [];
    switch (key) {
      case 'title':
        newGalleries = _.sortBy(galleries, function (o) {
          return o.title;
        });
        break;
      case 'date':
        newGalleries = _.sortBy(galleries, function (o) {
          return new moment(o.time);
        }).reverse();
        break;
      default:
        newGalleries = _.sortBy(galleries, function (o) {
          return o.id;
        });
        break;
    }

    setCurrentGalleries(newGalleries);
    setActive({ ...active, sort: key });
  };

  const onFilter = (key) => {
    // console.log(`filter: ${key}`);

    if (key === 'all') {
      setCurrentGalleries(galleries);
    } else {
      const filteredGalleries = galleries.filter((item) => {
        const itemTag = sourceToTag(item.source);
        return itemTag === key;
      });
      setCurrentGalleries(filteredGalleries);
    }

    setActive({ sort: 'default', filter: key });
  };

  console.log(currentGalleries);

  return (
    <div className="gallery">
      <PageHeader title="Gallery" />
      <div className="gallery__contents">
        <GalleryAction
          filters={filters}
          sorts={sorts}
          current={active}
          onSort={onSort}
          onFilter={onFilter}
        />

        <div className="gallery__cards grid__responsive">
          <Image.PreviewGroup>
            {currentGalleries.map((Gallery, index) => {
              return <GalleryCard key={index} {...Gallery} />;
            })}
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const initialGalleries = [
  {
    id: 1,
    title: 'USA Geothermal',
    time: '11/27/2020',
    url: 'http://mail.com',
    username: 'mail project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a mail project',
    source: 'gallery10.png',
  },
  {
    id: 2,
    title: 'Well Optimization',
    time: '10/21/2020',
    url: 'http://web.com',
    username: 'web project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a web project',
    source: 'gallery5.png',
  },
  {
    id: 3,
    title: 'Well Optimization',
    time: '12/01/2020',
    url: 'http://example.com',
    username: 'example project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a example project',
    source: 'gallery3.png',
  },
  {
    id: 4,
    title: 'Well Optimization',
    time: '12/01/2020',
    url: 'http://example.com',
    username: 'example project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a example project',
    source: 'gallery7.png',
  },
  {
    id: 5,
    title: 'USA Geothermal',
    time: '12/18/2020',
    url: 'http://archive.com',
    username: 'archive project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a archive project',
    source: 'gallery4.png',
  },
  {
    id: 6,
    title: 'Well Optimization',
    time: '10/21/2020',
    url: 'http://web.com',
    username: 'web project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a web project',
    source: 'gallery1.png',
  },
  {
    id: 7,
    title: 'USA Geothermal',
    time: '11/27/2020',
    url: 'http://mail.com',
    username: 'mail project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a mail project',
    source: 'gallery6.png',
  },
  {
    id: 8,
    title: 'USA Geothermal',
    time: '11/27/2020',
    url: 'http://mail.com',
    username: 'mail project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a mail project',
    source: 'gallery2.png',
  },
  {
    id: 9,
    title: 'USA Geothermal',
    time: '12/18/2020',
    url: 'http://archive.com',
    username: 'archive project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a archive project',
    source: 'gallery8.png',
  },
  {
    id: 10,
    title: 'Well Optimization',
    time: '10/21/2020',
    url: 'http://web.com',
    username: 'web project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a web project',
    source: 'gallery9.png',
  },
  {
    id: 11,
    title: '2D Flow Contour',
    time: '09/09/2020',
    url: 'http://test.com',
    username: 'test project',
    collaborationGroup: 'Lab Internal',
    description: 'EAI Geo Model',
    source: 'gallery.png',
  },
  {
    id: 12,
    title: 'Well Optimization',
    time: '12/01/2020',
    url: 'http://example.com',
    username: 'example project',
    collaborationGroup: 'Lab Internal',
    description: 'this is a example project',
    source: 'gallery11.png',
  },
  //   {
  //     id: 13,
  //     title: "USA Geothermal",
  //     time: "12/18/2020",
  //     url: "http://archive.com",
  //     username: "archive project",
  //     collaborationGroup: "Lab Internal",
  //     description: "this is a archive project",
  //     source: null,
  //   },
];
