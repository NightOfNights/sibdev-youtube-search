import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { SearchPage, SearchResultPage, FavouritesPage } from '../pages';

const SearchRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={SearchPage} />
      <Route exact path={`${path}/favourites`} component={FavouritesPage} />
      <Route exact path={`${path}/result`} component={SearchResultPage} />
      <Redirect to="/search" />
    </Switch>
  );
};

export default SearchRouter;
