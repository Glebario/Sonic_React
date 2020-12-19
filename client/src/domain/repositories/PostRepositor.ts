import { injectable } from 'inversify';
import axios, { AxiosError, AxiosResponse } from 'axios';
import IPostRepository from '../models/interfaces/IPostRepository';
import { GetPostsPreviewResult } from '../models/structures/RequestToServerResult';

@injectable()
export default class PostRepository implements IPostRepository {
  public getPostsPreview = (): Promise<GetPostsPreviewResult> => new Promise((resolve, reject) => {
    axios.get('/api/post/preview/')
      .then(
        (response: AxiosResponse<GetPostsPreviewResult['successResult']>) => {
          resolve({
            successResult: response.data,
          });
        },
      )
      .catch(
        (err: AxiosError<GetPostsPreviewResult['err']>) => {
          reject(new Error(`${err.response?.data?.message}`));
        },
      );
  });
}
