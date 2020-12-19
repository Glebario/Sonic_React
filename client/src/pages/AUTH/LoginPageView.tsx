import React from 'react';
import { resolve } from 'inversify-react';
import DependencyType from '../../inversify.types';
import LoginView from '../../components/AUTH/login/LoginView';
import IAuthModel from '../../domain/models/interfaces/IAuthModel';

export class LoginPageView extends React.Component {
  @resolve(DependencyType.AuthModel)
  private readonly authModel: IAuthModel;

  render(): JSX.Element {
    return (
      <LoginView model={this.authModel} />
    );
  }
}
