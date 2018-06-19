import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import {
  Workspace,
  Environments,
  Apps,
  Apis,
} from './pages';

const Routes = () => (
  <Switch>
    <Redirect path="/" exact to="/workspace" />
    <Redirect path="/deployments" exact to="/deployments/apps" />
    <Route path="/workspace" component={Workspace} />
    <Route path="/environments" component={Environments} />
    <Route path="/deployments/apps" component={Apps} />
    <Route path="/deployments/apis" component={Apis} />
    <Route component={Workspace} />
  </Switch>
);

export default Routes;
