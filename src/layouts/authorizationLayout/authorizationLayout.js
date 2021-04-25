import React from 'react';
import { Row, Col } from 'antd';
import './authorizationLayout.scss';

const colSize = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 10 },
  lg: { span: 8 },
};

const AuthorizationLayout = ({ children }) => {
  return (
    <Row justify="center" align="middle" className="authorization-layout">
      <Col {...colSize} className="authorization-layout__wrapper">
        {children}
      </Col>
    </Row>
  );
};

export default AuthorizationLayout;
