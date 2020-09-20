import ILoginRepository from "../models/interfaces/ILoginRepository";

import AuthorizationResult from '../models/structures/AuthorizationResult';

export default class LoginRepository implements ILoginRepository {
  /**
   * @throws {Error} if credentials have not passed
   */
  login(email: string, password: string): Promise<AuthorizationResult> {
    return new Promise((resolve, reject) => {
      if (email === 'user@email.com' && password === 'password') {
        resolve({
          authorizationToken: 'Bearer ASKJdsfjdijosd93wiesf93isef',
        });
      }

      reject(new Error('Email or password is not correct'));
    });
  }
}
