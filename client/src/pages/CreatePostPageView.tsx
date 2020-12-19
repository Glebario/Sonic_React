import React from 'react';
import { resolve } from 'inversify-react';
import DependencyType from '../inversify.types';
import CreatePostView from '../components/createPostView/CreatePostView';
import IPostModel from '../domain/models/interfaces/IPostModel';

export class CreatePostPageView extends React.Component {
  @resolve(DependencyType.AuthModel)
  private readonly postModel: IPostModel;

  render(): JSX.Element {
    return (
      <CreatePostView model={this.postModel} />
    );
  }
}
