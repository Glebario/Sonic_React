import AuthorizationResult from '../structures/AuthorizationResult';

export default interface ILoginRepository {
  /**
   * @throws {Error} if credentials have not passed
   */
  login(email: string, password: string): Promise<AuthorizationResult>;
}
