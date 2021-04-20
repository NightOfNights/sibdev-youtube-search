import React from 'react';
import { Col, Row } from 'antd';
import { Navbar } from '../../components';

const colSize = {
  xs: { span: 24 },
  sm: { span: 16 },
};

const MainLayout = ({ children }) => {
  return (
    <Row justify="center" className="main-layout__row-wrapper">
      <Col {...colSize} className="main-layout__col-wrapper">
        <Navbar />
        {children}
      </Col>
    </Row>
  );
};

export default MainLayout;
