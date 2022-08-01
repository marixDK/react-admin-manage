import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import asyncRoutes from '@/routes/asyncRoutes';
import { getRouteItem } from './util';

console.log(asyncRoutes);

const NavBreadcrumb: React.FC = () => {
  // const [breadcrumbList, setBreadcrumbList] = useState([]);
  const { pathname } = useLocation();
  // 下面的代码相当于这一段注释的简写
  // const breadcrumbList = pathname.split('/').filter((item) => {
  //   return Boolean(item);
  // });
  const breadcrumbList = pathname.split('/').filter(Boolean);
  console.log(breadcrumbList);
  // const navigate = useNavigate();
  useEffect(() => {
    console.log(pathname);
    console.log(getRouteItem(asyncRoutes, pathname));
  });
  return (
    <Breadcrumb separator='>'>
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
};

export default NavBreadcrumb;
