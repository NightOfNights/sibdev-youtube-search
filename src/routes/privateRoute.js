import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  isAuthorized,
  redirectPath,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: redirectPath, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = {
  component: undefined,
  isAuthorized: false,
  redirectPath: '/auth',
  location: {
    pathname: '',
  },
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};

export default PrivateRoute;
