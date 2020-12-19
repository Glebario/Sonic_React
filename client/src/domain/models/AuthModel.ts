import { action, observable } from 'mobx';
import { inject, injectable } from 'inversify';
import history from '../../history';

import IAuthModel from './interfaces/IAuthModel';
import IAuthRepository from './interfaces/IAuthRepository';
import {
  ILoginForm, IRegistrationForm,
  IUserLogin, IUserRegister,
  IValidateError,
  LoginSchemaName, RegistrationSchemaName,
  Schema,
  SchemaName,
} from './interfaces/auth-interfaces';
import { validate, isValid } from './validators/FormValidator';
import IUserModel from './interfaces/IUserModel';
import ILocalStorageRepository from './interfaces/ILocalStorageRepository';
import DependencyType from '../../inversify.types';
import IPostRepository from './interfaces/IPostRepository';
import { LocalStorageKeys } from './interfaces/generic-interfaces';

@injectable()
export default class AuthModel implements IAuthModel {
  public constructor(
    @inject(DependencyType.AuthRepository) private readonly authRepository: IAuthRepository,
    @inject(DependencyType.PostRepository) private readonly postRepository: IPostRepository,
    @inject(DependencyType.UserModel) private userModel: IUserModel,
    @inject(DependencyType.LocalStorageRepository) private readonly localStorageRepository: ILocalStorageRepository,
  ) {}

  @observable
  public isUserLoggedIn: boolean = false;

  @observable
  public emailQuery: string = '';

  @observable
  public passwordQuery: string = '';

  @observable
  public confirmPasswordQuery: string = '';

  @observable
  public userNameQuery: string = '';

  @observable
  public countryQuery: string = '';

  @observable
  public genderQuery: string = '';

  @observable
  public serverErrorMessage: string = '';

  @observable
  public validateErrors: IValidateError[] = [];

  @observable
  public loadingLogo: boolean = false;

  @action public onEmailQueryChanged = (loginQuery: string): void => {
    this.emailQuery = loginQuery;
  };

  @action public onPasswordQueryChanged = (passwordQuery: string): void => {
    this.passwordQuery = passwordQuery;
  };

  @action public onConfirmPasswordQueryChanged = (confirmPasswordQuery: string): void => {
    this.confirmPasswordQuery = confirmPasswordQuery;
  };

  @action public onUserNameQueryChanged = (userName: string): void => {
    this.userNameQuery = userName;
  };

  @action public onCountryQueryChanged = (country: string): void => {
    this.countryQuery = country;
  };

  @action public onGenderQueryChanged = (gender: string): void => {
    this.genderQuery = gender;
  };

  @action
  public validateForm = (schemaName: SchemaName, formValue: Schema): void => {
    const errors: IValidateError[] = validate(schemaName, formValue);
    errors.forEach((err) => {
      this.validateErrors.push(err);
    });
  };

  @action
  public updateSession(): void {
    const token = this.localStorageRepository.getJWT();
    this.isUserLoggedIn = !!token;
  }

  @action
  public async loginSubmit(): Promise<void> {
    // console.log(this.isUserLoggedIn);
    this.loadingLogo = true;
    this.serverErrorMessage = '';
    this.validateErrors = [];

    const loginSchemaName: LoginSchemaName = 'loginSchema';
    const loginForm: ILoginForm = {
      email: this.emailQuery,
      password: this.passwordQuery,
    };

    if (!isValid(loginSchemaName, loginForm)) {
      this.validateForm(loginSchemaName, loginForm); // show error
      this.delay(1500, false);
      return;
    }

    try {
      const user: IUserLogin = {
        email: this.emailQuery,
        password: this.passwordQuery,
      };
      await this.authRepository.login(user)
        .then((authRes) => {
          this.localStorageRepository.addUserData(authRes.successResult.userResponse, LocalStorageKeys.ownerUser);
          this.localStorageRepository.addJwtToken(authRes.successResult.token);
          this.userModel.ownerUser = authRes.successResult.userResponse;
        })
        .then(() => this.delay(1500, false));

      this.emailQuery = '';
      this.passwordQuery = '';
      this.isUserLoggedIn = true;
      history.push(`/user/${this.localStorageRepository.getOwnerUserData().localId}`);
    } catch (err) {
      this.serverErrorMessage = err.message;
      this.delay(1500, false);
    }
  }

  @action
  public async registrationSubmit(): Promise<void> {
    this.loadingLogo = true;
    this.serverErrorMessage = '';
    this.validateErrors = [];

    const registrationSchemaName: RegistrationSchemaName = 'registrationSchema';
    const registrationForm: IRegistrationForm = {
      userName: this.userNameQuery,
      country: this.countryQuery,
      gender: this.genderQuery,
      email: this.emailQuery,
      password: this.passwordQuery,
      confirmPassword: this.confirmPasswordQuery,
    };

    if (!isValid(registrationSchemaName, registrationForm)) {
      this.validateForm(registrationSchemaName, registrationForm); // show error
      this.delay(1500, false);
      return;
    }

    try {
      const user: IUserRegister = {
        email: this.emailQuery,
        password: this.passwordQuery,
        profile: {
          userName: this.userNameQuery,
          country: this.countryQuery,
          gender: this.genderQuery,
        },
      };
      await this.authRepository.registration(user)
        .then(() => this.delay(1500, false));

      this.emailQuery = '';
      this.passwordQuery = '';
      this.userNameQuery = '';
      this.countryQuery = '';
      this.genderQuery = '';
      history.push('/sign-in');
    } catch (err) {
      this.serverErrorMessage = err.message;
      this.delay(1500, false);
    }
  }

  @action
  public logout = (): void => {
    this.loadingLogo = true;
    this.localStorageRepository.removeAllData();
    this.isUserLoggedIn = false;
    this.delay(1500, false);
  };

  private delay = (msTime: number, includeLogo: boolean): void => {
    setTimeout(() => {
      this.loadingLogo = includeLogo;
      console.log('key')
    }, msTime);
  };
}
