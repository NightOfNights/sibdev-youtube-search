import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import './authorizationForm.scss';

const formlayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const tailLayout = {
  wrapperCol: {
    xs: {
      offset: 0,
      span: 24,
    },
    sm: {
      offset: 6,
      span: 12,
    },
  },
};

const AuthorizationForm = ({ onFormSubmit }) => {
  const handleFormSubmit = (formData) => {
    console.log('Success:', formData);
    onFormSubmit(formData);
  };

  const handleFailedFormSubmit = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...formlayout}
      name="basic"
      onFinish={handleFormSubmit}
      onFinishFailed={handleFailedFormSubmit}
      className="authorization-form"
    >
      <Form.Item
        label={<label className="authorization-form__input-label">Логин</label>}
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите логин!',
          },
        ]}
        className="authorization-form__item"
      >
        <Input className="authorization-form__input" />
      </Form.Item>
      <Form.Item
        label={
          <label className="authorization-form__input-label">Пароль</label>
        }
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль!',
          },
        ]}
        className="authorization-form__item"
      >
        <Input.Password className="authorization-form__input" />
      </Form.Item>
      <Form.Item {...tailLayout} className="authorization-form__tail">
        <Button
          block="true"
          type="primary"
          htmlType="submit"
          className="authorization-form__submit-btn"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

AuthorizationForm.defaultProps = {
  onFormSubmit: undefined,
};

AuthorizationForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default AuthorizationForm;
