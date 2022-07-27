import { Col, Row } from 'antd';
import React from 'react';
import Hamburger from './Hamburger';
import NavBreadcrumb from './Breadcrumb';

const AppNav: React.FC = () => {
  return (
    <div className='app-nav'>
      <Row className='nav-row' gutter={16}>
        <Col xl={12} lg={12} md={12} sm={12} xs={2}>
          <div className='left-panel'>
            <Hamburger />
            <NavBreadcrumb />
          </div>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={22}></Col>
      </Row>
    </div>
  );
};

export default AppNav;
