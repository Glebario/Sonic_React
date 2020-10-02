

import React from 'react';
import { observer, Provider } from "mobx-react";

import AuthModel from "./domain/models/AUTH/AuthModel"
import AuthRepository from "./domain/repositories/AUTH/AuthRepository";

import { LoginPageView } from "./pages/AUTH/login/LoginPageView";
import {useRoutes} from "./routes";
import { Router } from 'react-router-dom';
import {createBrowserHistory} from "history";

@observer
class App extends React.Component {
  render(): JSX.Element {
    // data layer
    const authRepository = new AuthRepository();
    const authModel = new AuthModel(authRepository);

    const mainModel = 'mainModel'; //##########################################

    const stores = {
      authRepository,
      authModel,
    };

    const history = createBrowserHistory()
    const routes = authModel.isUserLoggedIn ?
        useRoutes(authModel.isUserLoggedIn, mainModel)
        :
        useRoutes(authModel.isUserLoggedIn, authModel)

    return (
      <Provider {...stores}>
        <Router history={history}>
          <div>
            { routes }
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
