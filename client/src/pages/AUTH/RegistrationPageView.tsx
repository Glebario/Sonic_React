import React from 'react';
import { resolve } from 'inversify-react';
import DependencyType from '../../inversify.types';
import IAuthModel from '../../domain/models/interfaces/IAuthModel';
import RegistrationView from '../../components/AUTH/registration/RegistrationView';

export class RegistrationPageView extends React.Component {
  @resolve(DependencyType.AuthModel)
  private readonly authModel: IAuthModel;

  render(): JSX.Element {
    return (
      <RegistrationView model={this.authModel} />
    );
  }
}
