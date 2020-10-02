import IAuthRepository from "../../models/AUTH/interfaces/IAuthRepository";

import axios, {AxiosResponse, AxiosError} from "axios";

import {AuthorizationResult, RegistrationResult} from '../../models/AUTH/structures/AuthorizationResult';
import {IUserLogin, IUserRegister} from "../../models/AUTH/interfaces/auth-interfaces";

export default class AuthRepository implements IAuthRepository {
  /**
   * @throws {Error} if credentials have not passed
   */
  login(user: IUserLogin): Promise<AuthorizationResult> {
      return new Promise((resolve, reject) => {
          axios.post('/api/auth/login', user)
              .then(
                  (response: AxiosResponse<AuthorizationResult['successResult']>) => {
                      resolve({
                          successResult: response.data,
                      })
                  }
              )
              .catch(
                  (err: AxiosError<AuthorizationResult['err']>) => {
                      reject(new Error(`${err.response?.data?.message}`));
                  }
              )
      })
  }

  registration(user: IUserRegister): Promise<RegistrationResult> {
      return new Promise((resolve, reject) => {
          axios.post('/api/auth/register', user)
              .catch(
                  (err: AxiosError<AuthorizationResult['err']>) => {
                      reject(new Error(`${err.response?.data?.message}`));
                  }
              )
      })
  }
}
