import React from 'react';
import { resolve } from 'inversify-react';
import DependencyType from '../inversify.types';
import { SettingsView } from '../components/settingsView/settingsView';
import IAuthModel from '../domain/models/interfaces/IAuthModel';

export class SettingsPageView extends React.Component {
  @resolve(DependencyType.AuthModel)
  private readonly authModel: IAuthModel;

  render(): JSX.Element {
    return (
      <SettingsView model={this.authModel} />
    );
  }
}
