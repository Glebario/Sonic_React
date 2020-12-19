import React from 'react';
import { RouteComponentProps } from 'react-router';
import { resolve } from 'inversify-react';
import DependencyType from '../inversify.types';
import UserView from '../components/userView/UserView';
import IUserModel from '../domain/models/interfaces/IUserModel';

export class UserPageView extends React.Component<RouteComponentProps> {
  @resolve(DependencyType.UserModel)
  private readonly userModel: IUserModel;

  render(): JSX.Element {
    const { match } = this.props;

    return (
      <UserView model={this.userModel} match={match} />
    );
  }
}
