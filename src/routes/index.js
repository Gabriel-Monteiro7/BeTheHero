import { Switch } from "react-router-dom";
import React from "react";
import Route from "./Route";
import Logon from "../pages/Logon";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import NewIncident from "../pages/NewIncident";

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" component={Logon} exact>
        {props.children}
      </Route>
      <Route path="/register" component={Register}>
        {props.children}
      </Route>
      <Route path="/profile" component={Profile} isPrivate>
        {props.children}
      </Route>
      <Route path="/incidents/new" component={NewIncident} isPrivate>
        {props.children}
      </Route>
    </Switch>
  );
}
