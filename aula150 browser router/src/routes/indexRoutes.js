import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login/indexLogin";
import Page404 from "../pages/Page404/index404";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
