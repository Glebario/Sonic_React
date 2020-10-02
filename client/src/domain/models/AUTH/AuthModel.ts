import { action, observable } from "mobx";

import IAuthModel from "./interfaces/IAuthModel";
import IAuthRepository from "./interfaces/IAuthRepository";

import {
  ILoginForm, IRegistrationForm, IUser,
  IUserLogin, IUserRegister,
  IValidateError,
  LoginSchemaName, RegistrationSchemaName,
  Schema,
  SchemaName
} from "./interfaces/auth-interfaces";
import {validate, isValid} from "./validators/FormValidator";

export default class AuthModel implements IAuthModel {
  @observable
  public isUserLoggedIn: boolean = false;

  @observable
  public user: IUser | {} = {};

  @observable
  public token: string = '';



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

  constructor(private authRepository: IAuthRepository)
  {}

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

  //########################################################  validateForm  ###################################
  @action
  public validateForm = (schemaName: SchemaName, formValue: Schema): void => {
    const errors: IValidateError[] = validate(schemaName, formValue)
    errors.forEach((err) => {
      this.validateErrors.push(err)
    })
  };

  //########################################################  loginSubmit  ###################################
  @action
  public async loginSubmit(): Promise<void> {
    //this.loadingLogo = true;
    this.serverErrorMessage = '';
    this.validateErrors = [];

    const loginSchemaName: LoginSchemaName = 'loginSchema'
    const loginForm: ILoginForm = {
      email: this.emailQuery,
      password: this.passwordQuery,
    }

    if(!isValid(loginSchemaName, loginForm)) {
      this.validateForm(loginSchemaName, loginForm) //show error
      return
    }

    try {
      const user: IUserLogin = {
        email: this.emailQuery,
        password: this.passwordQuery
      }
      await this.authRepository.login( user )
          .then((response) => {
            this.user = response.successResult.userResponse
            this.token = response.successResult.token
            this.isUserLoggedIn = true;
          })

      this.emailQuery = '';
      this.passwordQuery = '';
      setTimeout(() => { this.loadingLogo = false; }, 1500)
    } catch (err) {
      this.serverErrorMessage = err.message;
      setTimeout(() => { this.loadingLogo = false; }, 1500)
    }
  };

  //########################################################  registrationSubmit  ###################################
  @action
  public async registrationSubmit(): Promise<void> {
    //this.loadingLogo = true;
    this.serverErrorMessage = '';
    this.validateErrors = [];

    const registrationSchemaName: RegistrationSchemaName = 'registrationSchema'
    const registrationForm: IRegistrationForm = {
      userName: this.userNameQuery,
      country: this.countryQuery,
      gender: this.genderQuery,
      email: this.emailQuery,
      password: this.passwordQuery,
      confirmPassword: this.confirmPasswordQuery
    }

    if(!isValid(registrationSchemaName, registrationForm)) {
      this.validateForm(registrationSchemaName, registrationForm) //show error
      return
    }

    try {
      const user: IUserRegister = {
        email: this.emailQuery,
        password: this.passwordQuery,
        profile: {
          userName: this.userNameQuery,
          country: this.countryQuery,
          gender: this.genderQuery
        }
      }
      await this.authRepository.registration( user );

      this.emailQuery = '';
      this.passwordQuery = '';
      this.userNameQuery = '';
      this.countryQuery = '';
      this.genderQuery = '';
      this.isUserLoggedIn = true;
      setTimeout(() => { this.loadingLogo = false; }, 1500)
    } catch (err) {
      this.serverErrorMessage = err.message;
      setTimeout(() => { this.loadingLogo = false; }, 1500)
    }
  };

  //########################################################  logout  ###################################
  @action
  public logout(): void {
    this.isUserLoggedIn = false;
  };

}