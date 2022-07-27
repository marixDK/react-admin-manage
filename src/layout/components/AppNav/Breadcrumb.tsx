import { Breadcrumb } from 'antd';
import React from 'react';

const NavBreadcrumb: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <span>Application Center</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

export default NavBreadcrumb;
