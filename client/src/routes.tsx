import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoginPageView } from './pages/AUTH/LoginPageView';
import { RegistrationPageView } from './pages/AUTH/RegistrationPageView';
// import IAuthModel from './domain/models/interfaces/IAuthModel';
// import IUserModel from './domain/models/interfaces/IUserModel';

import NavBar from './components/shared/NavBar/NavBar';
import { UserPageView } from './pages/UserPageView';
import { SettingsPageView } from './pages/SettingsPageView';
import { GuardRoute } from './components/shared/GuardRoute';
import { CreatePostPageView } from './pages/CreatePostPageView';

export const useRoutes: any = (isAuthenticated: boolean) => (
  <Switch>
    <Route component={LoginPageView} path="/sign-in" />
    <Route component={RegistrationPageView} path="/sign-up" />
    <Route render={() => (
      <GuardRoute auth={isAuthenticated}>
        <NavBar>
          <Switch>
            <Route component={UserPageView} path="/user/:userId" />
            <Route component={SettingsPageView} path="/settings" exact />
            <Route component={CreatePostPageView} path="/creation" exact />
          </Switch>
        </NavBar>
      </GuardRoute>
    )}
    />
    <Route path="*" render={() => '404 NOT FOUND'} />
  </Switch>
);
