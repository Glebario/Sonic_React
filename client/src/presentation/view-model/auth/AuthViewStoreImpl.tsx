import AuthViewStore from './AuthViewStore';
import BaseView from '../../view/BaseView';
import LoginUseCase from '../../../domain/interactors/auth/LoginUseCase';
import AuthBusinessStore from '../../../domain/entity/auth/models/AuthBusinessStore';
import AuthListener from '../../../domain/entity/auth/models/AuthListener';
import FormValidator from '../../util/FormValidator';
import {action, observable} from "mobx";

export default class AuthViewStoreImpl implements AuthViewStore {
  @observable public emailQuery: string;
  @observable public passwordQuery: string;
  @observable public isSignInButtonVisible: boolean;
  @observable public isSignOutButtonVisible: boolean;

  @observable public isShowError: boolean;
  @observable public errorMessage: string;

  @observable public authStatus: string;
  @observable public isAuthStatusPositive: boolean;

  //private baseView?: BaseView;
  private loginUseCase: LoginUseCase;
  private authBusinessStore: AuthBusinessStore;

  public constructor(loginUseCase: LoginUseCase, authBusinessStore: AuthBusinessStore) {
    this.emailQuery = '';
    this.passwordQuery = '';
    this.isSignInButtonVisible = true;
    this.isSignOutButtonVisible = false;

    this.isShowError = false;
    this.errorMessage = '';

    this.authStatus = 'is not authorized';
    this.isAuthStatusPositive = false;

    this.loginUseCase = loginUseCase;
    this.authBusinessStore = authBusinessStore;

    //this.authHolder.addAuthListener(this);
  }

  // public attachView = (baseView: BaseView): void => {
  //   this.baseView = baseView;
  // };
  //
  // public detachView = (): void => {
  //   this.baseView = undefined;
  // };

  @action public onAuthChanged = (): void => {
    if (this.authBusinessStore.isUserAuthorized) {
      this.isSignInButtonVisible = false;
      this.isSignOutButtonVisible = true;
      this.authStatus = 'authorized';
      this.isAuthStatusPositive = true;
    } else {
      this.isSignInButtonVisible = true;
      this.isSignOutButtonVisible = false;
      this.authStatus = 'is not autorized';
      this.isAuthStatusPositive = false;
    }

    //this.notifyViewAboutChanges();
  };

  @action public onEmailQueryChanged = (loginQuery: string): void => {
    this.emailQuery = loginQuery;
    //this.notifyViewAboutChanges();
  };

  @action public onPasswordQueryChanged = (passwordQuery: string): void => {
    this.passwordQuery = passwordQuery;
    //this.notifyViewAboutChanges();
  };

  @action public onClickSignIn = async (): Promise<void> => {
    if (!this.validateLoginForm()) {
      //this.notifyViewAboutChanges();
      return;
    }

    try {
      await this.loginUseCase.loginUser(this.emailQuery, this.passwordQuery);
      this.isShowError = false;
      this.errorMessage = '';
    } catch (e) {
      this.errorMessage = e.message;
      this.isShowError = true;
    }

    //this.notifyViewAboutChanges();
  };

  @action public onClickSignOut = (): void => {
    this.authBusinessStore.onSignedOut();
  };

  @action private validateLoginForm = (): boolean => {
    if (!this.emailQuery) {
      this.isShowError = true;
      this.errorMessage = 'Email cannot be empty';
      return false;
    }
    if (this.errorMessage === 'Email cannot be empty') {
      this.isShowError = false;
      this.errorMessage = '';
    }

    if (!FormValidator.isValidEmail(this.emailQuery)) {
      this.isShowError = true;
      this.errorMessage = 'Email format is not valid';
      return false;
    }
    if (this.errorMessage === 'Email format is not valid') {
      this.isShowError = false;
      this.errorMessage = '';
    }

    if (!this.passwordQuery) {
      this.isShowError = true;
      this.errorMessage = 'Password cannot be empty';
      return false;
    }
    if (this.errorMessage === 'Password cannot be empty') {
      this.isShowError = false;
      this.errorMessage = '';
    }

    return true;
  }

  // private notifyViewAboutChanges = (): void => {
  //   if (this.baseView) {
  //     this.baseView.onViewModelChanged();
  //   }
  // };
}
