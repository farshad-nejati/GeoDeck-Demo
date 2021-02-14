import React from 'react';
import { Image, Menu, Dropdown, Avatar, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import {
  DownOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { BASE_URL } from '@app/constant';

const navs = [
  { key: 'project', label: 'Project', route: '/project' },
  { key: 'gallery', label: 'Gallery', route: '/gallery' },
  { key: 'main', label: 'Studio', route: '/main/2' },
];

const Navigation = () => {
  const history = useHistory();
  console.log(history);

  const renderProfileMenu = () => (
    <Menu>
      <Menu.Item icon={<SettingOutlined />} onClick={() => history.push('/')}>
        Setting
      </Menu.Item>
      <Menu.Item
        icon={<LogoutOutlined />}
        onClick={() => history.push('/login')}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );
  const renderRightNavs = () => (
    <>
      <Dropdown overlay={renderProfileMenu} trigger={['click']}>
        <a className="navigation__profile" onClick={(e) => e.preventDefault()}>
          <Avatar src={`${BASE_URL}/avatar/ava.png`} />
          Jane Doe
          <DownOutlined />
        </a>
      </Dropdown>
    </>
  );

  return (
    <>
      <div className="navigation__main__menu">
        <div className="navigation__main__logo">
          {/* <Image
          className="image navigation__main__logo"
          preview={false}
          src="./img/logo/logo.png"
        /> */}
          <img src={`${BASE_URL}/logo/logo.png`} className="image" />
        </div>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={history.location.pathname}
          selectedKeys={history.location.pathname}
        >
          {navs.map((nav, index) => {
            console.log(
              `is selected ${nav.route} :  ${
                history.location.pathname === nav.route
              }`,
            );

            return (
              <Menu.Item
                isSelected={history.location.pathname === nav.route}
                key={nav.key}
                onClick={() => history.push(nav.route)}
              >
                {nav.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
      <div className="navigation__main__right">
        <div>{renderRightNavs()}</div>
      </div>
    </>
  );
};

export default Navigation;
