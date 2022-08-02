import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import asyncRoutes from '@/routes/asyncRoutes';
import { getRouteItem } from './util';

const NavBreadcrumb: React.FC = () => {
  const { pathname } = useLocation();
  // 下面的代码相当于这一段注释的简写
  // const breadcrumbList = pathname.split('/').filter((item) => {
  //   return Boolean(item);
  // });
  const [breadcrumbList, setBreadcrumbList] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    const routeList = getRouteItem(asyncRoutes, pathname);
    setBreadcrumbList([...routeList]);
  }, [pathname]);
  return (
    <Breadcrumb separator='>'>
      {breadcrumbList.map((item) => (
        <Breadcrumb.Item key={item.path}>
          <span>{item.name}</span>
        </Breadcrumb.Item>
      ))}
      {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <span>Application Center</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <span>Application List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
    </Breadcrumb>
  );
};

export default NavBreadcrumb;
