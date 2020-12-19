import { AuthorizationResult, RegistrationResult } from '../structures/AuthorizationResult';

import { IUserLogin, IUserRegister } from './auth-interfaces';

export default interface IAuthRepository {
  /**
   * @throws {Error} if credentials have not passed
   */
  login(user: IUserLogin): Promise<AuthorizationResult>;
  registration(user: IUserRegister): Promise<RegistrationResult>
}
