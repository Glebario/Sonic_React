import { injectable } from 'inversify';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { GetUserResult } from '../models/structures/RequestToServerResult';
import IUserRepository from '../models/interfaces/IUserRepository';

@injectable()
export default class UserRepository implements IUserRepository {
  public getUser = (localId: string): Promise<GetUserResult> => new Promise((resolve, reject) => {
    axios.get(`/api/user/userId/${localId}`)
      .then(
        (response: AxiosResponse<GetUserResult['successResult']>) => {
          resolve({
            successResult: response.data,
          });
        },
      )
      .catch(
        (err: AxiosError<GetUserResult['err']>) => {
          reject(new Error(`${err.response?.data?.message}`));
        },
      );
  });
}
