import React from 'react';
import './auth-component.css';
import BaseView from '../BaseView';
import AuthViewStore from '../../view-model/auth/AuthViewStore';
import {inject, observer} from "mobx-react";

export interface AuthComponentProps {
  authViewStore: AuthViewStore;
}

export interface AuthComponentState {
  emailQuery: string;
  passwordQuery: string;
  isSignInButtonVisible: boolean;
  isSignOutButtonVisible: boolean;

  isShowError: boolean;
  errorMessage: string;

  authStatus: string;
  isAuthStatusPositive: boolean;
}

@inject("authViewStore")
@observer
export default class AuthComponent extends React.Component<any, AuthComponentState> {
  private authViewModel: AuthViewStore;

  public constructor(props: any) {
    super(props);

    const { authViewStore } = this.props;
    this.authViewModel = authViewStore;

    this.state = {
      emailQuery: authViewStore.emailQuery,
      passwordQuery: authViewStore.passwordQuery,
      isSignInButtonVisible: authViewStore.isSignInButtonVisible,
      isSignOutButtonVisible: authViewStore.isSignOutButtonVisible,

      isShowError: authViewStore.isShowError,
      errorMessage: authViewStore.errorMessage,

      authStatus: authViewStore.authStatus,
      isAuthStatusPositive: authViewStore.isAuthStatusPositive,
    };
    console.log(authViewStore.emailQuery)
  }

  // public componentDidMount(): void {
  //   this.authViewModel.attachView(this);
  // }
  //
  // public componentWillUnmount(): void {
  //   this.authViewModel.detachView();
  // }

  // public onViewModelChanged(): void {
  //   this.setState({
  //     emailQuery: this.authViewModel.emailQuery,
  //     passwordQuery: this.authViewModel.passwordQuery,
  //     isSignInButtonVisible: this.authViewModel.isSignInButtonVisible,
  //     isSignOutButtonVisible: this.authViewModel.isSignOutButtonVisible,
  //
  //     isShowError: this.authViewModel.isShowError,
  //     errorMessage: this.authViewModel.errorMessage,
  //
  //     authStatus: this.authViewModel.authStatus,
  //     isAuthStatusPositive: this.authViewModel.isAuthStatusPositive,
  //   });
  // }

  public render(): JSX.Element {
    const {
      emailQuery,
      passwordQuery,
      isSignInButtonVisible,
      isSignOutButtonVisible,

      isShowError,
      errorMessage,

      authStatus,
      isAuthStatusPositive,
    } = this.state;

    return (
      <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="auth-container col bg-white border rounded-lg py-4 px-5">
          <div className="row mt-2 mb-4">
            Status:&nbsp;
            <span className={`${isAuthStatusPositive ? 'text-success' : 'text-danger'}`}>
              {authStatus}
            </span>
          </div>

          <div className="row mt-2">
            <input
              type="text"
              placeholder="user@email.com"
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                this.authViewModel.onEmailQueryChanged(e.currentTarget.value);
              }}
              value={emailQuery}
              className="form-control"
            />
          </div>
          <div className="row mt-2">
            <input
              type="password"
              placeholder="password"
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                this.authViewModel.onPasswordQueryChanged(e.currentTarget.value);
              }}
              value={passwordQuery}
              className="form-control"
            />
          </div>

          {isShowError && (
            <div className="row my-3 text-danger justify-content-center">{errorMessage}</div>
          )}

          {isSignInButtonVisible && (
            <div className="row mt-4">
              <button
                type="button"
                className="col btn btn-primary"
                onClick={(): void => this.authViewModel.onClickSignIn()}
              >
                Sign in
              </button>
            </div>
          )}

          {isSignOutButtonVisible && (
            <div className="row mt-4">
              <button
                type="button"
                className="col btn btn-primary"
                onClick={(): void => this.authViewModel.onClickSignOut()}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
