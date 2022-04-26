import React from "react";
import { Route } from "react-router-dom";

export default ({ component: Component, ourTeamData, ...rest }) => {
  // window.onhashchange = null;
  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} ourTeamData={ourTeamData} />}
    />
  );
};
