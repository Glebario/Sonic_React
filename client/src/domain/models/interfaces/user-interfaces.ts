import { IUser } from './generic-interfaces';
import { IPostPreview } from './post-interfaces';

export interface IGetUserResponse {
  user: IUser;
  postsPreview: IPostPreview[]
}

export interface IGetUserErrorResponse {
  message: string
}
