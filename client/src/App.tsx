import './App.css';

import React from 'react';
import { observer, Provider } from "mobx-react";

import LoginModel from "./domain/models/LoginModel"
import AuthRepository from "./domain/repositories/LoginRepository";

import { LoginPageView } from "./pages/LoginPageView";

@observer
class App extends React.Component {
  render(): JSX.Element {
    // data layer
    const authRepository = new AuthRepository();
    const authModel = new LoginModel(authRepository);

    const stores = {
      authRepository,
      authModel,
    };

    return (
      <Provider {...stores}>
        <div className="app-container d-flex container-fluid">
          <LoginPageView model={authModel} />
        </div>
      </Provider>
    );
  }
}

export default App;
