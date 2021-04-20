import React from 'react';
import { Row, Col } from 'antd';
import './authorizationLayout.scss';

const colSize = {
  xs: { span: 24 },
  sm: { span: 16 },
  md: { span: 10 },
  lg: { span: 6 },
};

const AuthorizationLayout = ({ children }) => {
  return (
    <Row
      justify="center"
      align="middle"
      className="authorization-layout__wrapper-row"
    >
      <Col {...colSize} className="authorization-layout__wrapper-col">
        {children}
      </Col>
    </Row>
  );
};

export default AuthorizationLayout;
