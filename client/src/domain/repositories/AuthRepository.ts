import axios, { AxiosResponse, AxiosError } from 'axios';
import { injectable } from 'inversify';
import IAuthRepository from '../models/interfaces/IAuthRepository';
import { AuthorizationResult, RegistrationResult } from '../models/structures/AuthorizationResult';
import { IUserLogin, IUserRegister } from '../models/interfaces/auth-interfaces';

@injectable()
export default class AuthRepository implements IAuthRepository {
  /**
   * @throws {Error} if credentials have not passed
   */
  public login = (user: IUserLogin): Promise<AuthorizationResult> => new Promise((resolve, reject) => {
    axios.post('/api/auth/login', user)
      .then(
        (response: AxiosResponse<AuthorizationResult['successResult']>) => {
          resolve({
            successResult: response.data,
          });
        },
      )
      .catch(
        (err: AxiosError<AuthorizationResult['err']>) => {
          reject(new Error(`${err.response?.data?.message}`));
        },
      );
  });

  public registration = (user: IUserRegister): Promise<RegistrationResult> => new Promise((resolve, reject) => {
    axios.post('/api/auth/register', user)
      .then(() => resolve())
      .catch(
        (err: AxiosError<AuthorizationResult['err']>) => {
          reject(new Error(`${err.response?.data?.message}`));
        },
      );
  });
}
