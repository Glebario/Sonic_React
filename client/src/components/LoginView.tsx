import './LoginView.css';

import React from 'react';
import { observer } from "mobx-react";

import ILoginModel from "../domain/models/interfaces/ILoginModel";

interface IProps {
  model: ILoginModel;
}

@observer
export default class LoginView extends React.Component<IProps> {
  public render(): JSX.Element {
    const { model } = this.props;

    return (
      <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="auth-container col bg-white border rounded-lg py-4 px-5">
          {model.isUserLoggedIn && (
            <span className='text-success'>
              You are logged in. Exit:
            </span>
          )}

          {model.errorMessage && (
            <div className="row my-3 text-danger justify-content-center">{model.errorMessage}</div>
          )}

          {!model.isUserLoggedIn && (
            <form>
              <div className="row mt-2">
                <input
                  type="text"
                  name="email"
                  placeholder="user@email.com"
                  onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                    model.onEmailQueryChanged(e.currentTarget.value);
                  }}
                  value={model.emailQuery}
                  className="form-control"
                />
              </div>

              <div className="row mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                    model.onPasswordQueryChanged(e.currentTarget.value);
                  }}
                  value={model.passwordQuery}
                  className="form-control"
                />
              </div>

              <div className="row mt-4">
                <button
                  type="button"
                  className="col btn btn-primary"
                  onClick={(): void => model.submit()}
                >
                  Sign in
                </button>
              </div>
            </form>
          )}

          {model.isUserLoggedIn && (
            <div className="row mt-4">
              <button
                type="button"
                className="col btn btn-primary"
                onClick={(): void => model.logout()}
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
