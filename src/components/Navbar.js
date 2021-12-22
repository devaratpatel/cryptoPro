import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOulined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto Pro</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
    </div>
  );
}

export default Navbar;
