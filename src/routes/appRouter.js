import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TestPage } from '../pages';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" render={TestPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
