import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import {
  Page1,
  Page2,
  Page3,
} from './pages';

const Routes = () => (
  <Switch>
    <Redirect path="/" exact to="/page-1" />
    <Route path="/page-1" component={Page1} />
    <Route path="/page-2" component={Page2} />
    <Route path="/page-3" component={Page3} />
    <Route component={Page1} />
  </Switch>
);

export default Routes;
