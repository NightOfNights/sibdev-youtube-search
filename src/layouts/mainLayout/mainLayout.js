import React from 'react';
import { Col, Row } from 'antd';
import { Navbar } from '../../components';
import './mainLayout.scss';

const colSize = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 16 },
  lg: { span: 16 },
};

const MainLayout = ({ children }) => {
  return (
    <Col span={24} className="main-layout">
      <Row justify="center" className="main-layout__header">
        <Col {...colSize} className="main-layout__header-wrapper">
          <Navbar />
        </Col>
      </Row>
      <Row justify="center" className="main-layout__content">
        <Col {...colSize} className="main-layout__content-wrapper">
          {children}
        </Col>
      </Row>
    </Col>
  );
};

export default MainLayout;
