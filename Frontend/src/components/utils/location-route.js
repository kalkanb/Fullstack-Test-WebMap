import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { Layout } from "./layout";

export const LocationRoute = (props) => {
  return (
    <>
      <Layout>
        <Route
          exact={props.exact}
          path={props.path}
          component={props.component}
        />
      </Layout>
    </>
  );
};

LocationRoute.displayName = "LocationRoute";

LocationRoute.defaultProps = {
  exact: false,
};

LocationRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  component: PropTypes.any,
};
