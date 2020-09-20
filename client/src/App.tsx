import React from 'react';
import './App.css';
import AuthFakeApi from "./data/auth/AuthFakeApi";
import AuthBusinessStore from "./domain/entity/auth/models/AuthBusinessStore";
import LoginUseCase from "./domain/interactors/auth/LoginUseCase";
import AuthViewStoreImpl from "./presentation/view-model/auth/AuthViewStoreImpl";
import AuthComponent from "./presentation/view/auth/AuthComponent";
import {Provider} from "mobx-react";

function App(): JSX.Element {
  // data layer
  const authRepository = new AuthFakeApi();
  // domain layer
  const authHolder = new AuthBusinessStore();
  const loginUseCase = new LoginUseCase(authRepository, authHolder);
  // view r
  const authViewStore = new AuthViewStoreImpl(loginUseCase, authHolder);

  const stores = {
      authViewStore
  }

    return (
      <Provider {...stores}>
          <div className="app-container d-flex container-fluid">
            <AuthComponent />
          </div>
      </Provider>
  );
}

export default App;
