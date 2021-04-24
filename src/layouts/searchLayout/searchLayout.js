import React from 'react';
import MainLayout from '../mainLayout/mainLayout';
import { Row, Col } from 'antd';
import './searchLayout.scss';

const colSize = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 16 },
  lg: { span: 16 },
};

const SearchLayout = ({ children }) => {
  return (
    <MainLayout>
      <Row justify="center" align="middle" className="search-layout">
        <Col {...colSize} className="search-layout__wrapper">
          {children}
        </Col>
      </Row>
    </MainLayout>
  );
};

export default SearchLayout;
