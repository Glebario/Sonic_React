import { action, observable } from "mobx";

import ILoginModel from "./interfaces/ILoginModel";
import ILoginRepository from "./interfaces/ILoginRepository";

import FormValidator from './validators/FormValidator';

export default class LoginModel implements ILoginModel {
  @observable
  public isUserLoggedIn: boolean = false;

  @observable
  public emailQuery: string = '';

  @observable
  public passwordQuery: string = '';

  @observable
  public errorMessage: string = '';

  constructor(private loginRepository: ILoginRepository)
  {}

  @action public onEmailQueryChanged = (loginQuery: string): void => {
    this.emailQuery = loginQuery;
  };

  @action public onPasswordQueryChanged = (passwordQuery: string): void => {
    this.passwordQuery = passwordQuery;
  };

  @action
  public async submit(): Promise<void> {
    this.errorMessage = '';

    if (!this.validateLoginForm()) {
      return;
    }

    try {
      await this.loginRepository.login(this.emailQuery, this.passwordQuery);

      this.emailQuery = '';
      this.passwordQuery = '';
      this.isUserLoggedIn = true;
    } catch (e) {
      this.errorMessage = e.message;
    }
  };

  @action public logout(): void {
    this.isUserLoggedIn = false;
  };

  @action private validateLoginForm = (): boolean => {
    if (!this.emailQuery) {
      this.errorMessage = 'Email cannot be empty';
      return false;
    }
    if (this.errorMessage === 'Email cannot be empty') {
      this.errorMessage = '';
    }

    if (!FormValidator.isValidEmail(this.emailQuery)) {
      this.errorMessage = 'Email format is not valid';
      return false;
    }
    if (this.errorMessage === 'Email format is not valid') {
      this.errorMessage = '';
    }

    if (!this.passwordQuery) {
      this.errorMessage = 'Password cannot be empty';
      return false;
    }
    if (this.errorMessage === 'Password cannot be empty') {
      this.errorMessage = '';
    }

    return true;
  }
}
