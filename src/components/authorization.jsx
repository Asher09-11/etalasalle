import React from 'react';
import { useEffect } from 'react';

const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    console.log("isAuthenticated:", isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            window.location.href = "/";
        }
      }, [isAuthenticated]);
    return <Component {...props} />;
  };

  return AuthRoute;
};

export default withAuth;