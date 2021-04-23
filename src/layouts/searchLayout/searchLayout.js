import React from 'react';
import MainLayout from '../mainLayout/mainLayout';
import { Row, Col } from 'antd';
import './searchLayout.scss';

const colSize = {
  sm: { span: 24 },
  md: { span: 18 },
};

const SearchLayout = ({ children }) => {
  return (
    <MainLayout>
      <Row
        justify="center"
        align="middle"
        className="search-layout search-layout__wrapper-row"
      >
        <Col {...colSize} className="search-layout__wrapper-col">
          {children}
        </Col>
      </Row>
    </MainLayout>
  );
};

export default SearchLayout;
