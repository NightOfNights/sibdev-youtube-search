import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import SearchRouter from './searchRouter';
import { AuthorizationPage } from '../pages';
import users from '../data/users';

const AppRouter = () => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem('token') || ''
  );

  const handleAuthorization = (formData, history, onFailedAuthorization) => {
    const isUserExists = users.some(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (isUserExists) {
      const token = formData.username + formData.password;
      localStorage.setItem('token', token);
      setUserToken(token);
      history.push('/search');
    } else {
      onFailedAuthorization();
    }
  };

  return (
    <Switch>
      <Route
        path="/auth"
        render={() => (
          <AuthorizationPage onAuthorization={handleAuthorization} />
        )}
      />
      <PrivateRoute
        path="/search"
        isAuthorized={userToken !== ''}
        component={SearchRouter}
      />
      <Redirect to="/search" />
    </Switch>
  );
};

export default AppRouter;
