import React from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const GalleryAction = (props) => {
  const { filters, sorts, current } = props;

  // console.log(current);
  const onSort = ({ key }) => {
    // console.log('sort', e);
    props.onSort(key);
  };

  const onFilter = ({ key }) => {
    // console.log('filter', e);
    props.onFilter(key);
  };

  const sortMenu = (
    <Menu selectedKeys={current.sort} onClick={onSort} trigger={['hover']}>
      {sorts?.map(({ key, label }) => {
        return (
          <Menu.Item key={key} title={label}>
            {label}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Menu
      onSelect={onFilter}
      mode="horizontal"
      style={{ marginBottom: '1rem' }}
      selectedKeys={current.filter}
    >
      {filters?.map(({ filter, title }) => {
        return (
          <Menu.Item key={filter} title={title}>
            {title}
          </Menu.Item>
        );
      })}
      <Dropdown overlay={sortMenu} className="ant-menu-item">
        <a onClick={(e) => e.preventDefault()}>
          Sort By <DownOutlined />
        </a>
      </Dropdown>
    </Menu>
  );
};

export default GalleryAction;

// import { Tag } from 'antd';

// const { CheckableTag } = Tag;

// const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

// class GalleryFilter extends React.Component {
//   state = {
//     selectedTags: ['Books'],
//     tagsData: this.props.tags;
//   };

//   handleChange(tag, checked) {
//     this.setState({ selectedTags: tag });
//   }

//   render() {
//     const { selectedTags } = this.state;
//     return (
//       <>
//         {tagsData.map((tag) => (
//           <CheckableTag
//             key={tag}
//             checked={selectedTags.indexOf(tag) > -1}
//             onChange={(checked) => this.handleChange(tag, checked)}
//           >
//             {tag}
//           </CheckableTag>
//         ))}
//       </>
//     );
//   }
// }

// export default GalleryFilter;
