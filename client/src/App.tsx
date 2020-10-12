import "reflect-metadata"
import React from 'react';
import { observer } from "mobx-react";
import history from "./history";
import { Router } from "react-router-dom";
import { Provider } from "inversify-react"

import {useRoutes} from "./routes";
import ioc from "./inversify.config";
import IAuthModel from "./domain/models/AUTH/interfaces/IAuthModel";
import {DependencyType} from "./inversify.types";



@observer
class App extends React.Component {


  render(): JSX.Element {

      const authModel = ioc.container.get<IAuthModel>(DependencyType.AuthModel)

      const routes: React.ReactNode = useRoutes(authModel.isUserLoggedIn);
      console.log(authModel)

      return (
          <Provider container={ioc.container}>
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
