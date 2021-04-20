import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthorizationLayout } from '../../layouts';
import { AuthorizationForm } from '../../components';
import SibdevLogo from '../../assets/sibdev-logo.svg';
import './authorizationPage.scss';

const AuthorizationPage = ({ onAuthorization }) => {
  const history = useHistory();
  const onFailedAuthorization = () => {
    alert('Failed');
  };

  const handleFormSubmit = (formData) => {
    console.log('form submitted', formData);
    onAuthorization(formData, history, onFailedAuthorization);
  };

  return (
    <AuthorizationLayout>
      <div className="authorization-page">
        <img
          src={SibdevLogo}
          alt="Sibdev logo"
          className="authorization-page__logo"
        />
        <div className="authorization-page__header">Вход</div>
        <AuthorizationForm onFormSubmit={handleFormSubmit} />
      </div>
    </AuthorizationLayout>
  );
};

export default AuthorizationPage;
