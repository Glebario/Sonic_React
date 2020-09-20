import AuthRepository from '../../repository/auth/AuthRepository';
import AuthBusinessStore from '../../entity/auth/models/AuthBusinessStore';

export default class LoginUseCase {
  private authRepository: AuthRepository;
  private authHolder: AuthBusinessStore;

  public constructor(authRepository: AuthRepository, authHolder: AuthBusinessStore) {
    this.authRepository = authRepository;
    this.authHolder = authHolder;
  }

  /**
   * @throws {Error} if credentials are not valid or have not passed
   */
  public async loginUser(email: string, password: string): Promise<void> {
    const validationResult = await this.authRepository.validateCredentials(email, password);
    const authResult = await this.authRepository.login(
      email,
      password,
      validationResult.validationKey,
    );

    this.authHolder.onSignedIn(authResult.authorizationToken);
  }
}
