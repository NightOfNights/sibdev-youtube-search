import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import SearchRouter from './searchRouter';
import { AuthorizationPage } from '../pages';
import { userAuthorize } from '../utils/localStorage';

const AppRouter = () => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem('token') || ''
  );

  const handleAuthorization = (formData, history, onFailedAuthorization) => {
    userAuthorize(formData, history, setUserToken, onFailedAuthorization);
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
