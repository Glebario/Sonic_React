import './CreatePostView.css';

import React from 'react';
import { observer } from 'mobx-react';
import { LoadingLogo } from '../shared/LoadingLogo';
import IPostModel from '../../domain/models/interfaces/IPostModel';

interface IProps {
  model: IPostModel;
}

@observer
export default class CreatePostView extends React.Component<IProps> {
  render(): JSX.Element {
    const { model } = this.props;

    if (!model.loadingLogo) {
      return (
        <div />
      );
    }
    return (
      <div>
        <LoadingLogo />
      </div>
    );
  }
}
