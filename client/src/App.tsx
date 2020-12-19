import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
// import { Provider } from 'inversify-react';
import { resolve } from 'inversify-react';
// import ioc from './inversify.config';
import DependencyType from './inversify.types';
// import history from './history';
import { useRoutes } from './routes';
import IAuthModel from './domain/models/interfaces/IAuthModel';

import { setInterceptors } from './utils/token-interceptor';

@observer
class App extends React.Component {
  @resolve(DependencyType.AuthModel)
  private readonly authModel: IAuthModel;

  render(): JSX.Element {
    setInterceptors();
    this.authModel.updateSession();
    const routes: React.ReactNode = useRoutes(this.authModel.isUserLoggedIn);

    return (
      <div>
        {/*<div>*/}
        {/*  <h1>*/}
        {/*    {`${this.authModel.isUserLoggedIn}`}*/}
        {/*  </h1>*/}
        {/*</div>*/}
        <div>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
