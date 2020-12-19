import React from 'react';
import { observer } from 'mobx-react';
import IAuthModel from '../../domain/models/interfaces/IAuthModel';
import { LoadingLogo } from '../shared/LoadingLogo';

interface IProps {
  model: IAuthModel;
}

@observer
export class SettingsView extends React.Component<IProps> {
  render() {
    const { model } = this.props;

    if (!model.loadingLogo) {
      return (
        <div>
          <div className="container">
            <h2>Setting:</h2>
            <ul className="setting-bar">
              <li><button type="button" onClick={model.logout}>Exit</button></li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <LoadingLogo />
    );
  }
}
