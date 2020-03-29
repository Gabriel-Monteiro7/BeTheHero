import React from "react";
import { Route, Redirect } from "react-router-dom";

// import DefaultLayout from "../layouts/default"
// import AuthLayout from "../layouts/auth"

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/profile" />;
  }
  //   const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        // <Layout></Layout>
        <Component {...props} />
      )}
    />
  );
}
