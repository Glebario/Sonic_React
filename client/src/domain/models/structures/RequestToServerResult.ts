import { IGetUserErrorResponse, IGetUserResponse } from '../interfaces/user-interfaces';
import { IGetPostsPreviewErrorResponse, IGetPostsPreviewResponse } from '../interfaces/post-interfaces';

export interface GetUserResult {
  successResult: IGetUserResponse;
  err?: IGetUserErrorResponse
}

export interface GetPostsPreviewResult {
  successResult: IGetPostsPreviewResponse;
  err?: IGetPostsPreviewErrorResponse
}
