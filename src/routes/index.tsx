import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { Header } from '../components/Header';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import { Comic } from '../pages/Comic';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Header>
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/comic" component={Comic} isPrivate />
    </Header>
  </Switch>
);

export default Routes;
