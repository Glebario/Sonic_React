import './LoginView.css';

import React from 'react';
import { observer } from "mobx-react";
import {Link} from "react-router-dom"

import IAuthModel from "../../../domain/models/AUTH/interfaces/IAuthModel";
import {LoadingLogo} from "../../shared/LoadingLogo";
import {ShowValidateError} from "../../shared/ShowValidateError";


interface IProps {
  model: IAuthModel;
}

@observer
export default class LoginView extends React.Component<IProps> {
  public render(): JSX.Element {
      const {model} = this.props;

      if (!model.loadingLogo) {
          return (
              <div className="sign-in-page">
                  <div className="btn-register">
                      <small>У вас нет аккаунта?<br/>Тогда вам сюда>>></small><Link to="/sign-up">Registration</Link>
                  </div>

                  <div className="sign-in-form">
                      <form className="contact-form">


                          {
                              model.serverErrorMessage
                              &&
                              <div className="error">
                                  {model.serverErrorMessage}
                              </div>
                          }


                          {/* ====================== EMAIL =========================== */}
                          <div className="form-control-block">
                              <label className="required">Email</label>
                              <div>
                                  <input
                                      name="email"
                                      type="email"
                                      placeholder="Email"
                                      className="input-group"
                                      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                                          model.onEmailQueryChanged(e.currentTarget.value);
                                      }}
                                      value={model.emailQuery}
                                  />
                                  <div className="validation">
                                      <ShowValidateError fieldName={'email'} errors={model.validateErrors} />
                                  </div>
                              </div>
                          </div>
                          {/* ========================= PASSWORD ======================== */}
                          <div className="form-control-block">
                              <label className="required">Password</label>
                              <div>
                                  <input
                                      name="password"
                                      type="password"
                                      placeholder="Password"
                                      className="input-group"
                                      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                                          model.onPasswordQueryChanged(e.currentTarget.value);
                                      }}
                                      value={model.passwordQuery}
                                  />
                                  <div className="validation">
                                      <ShowValidateError fieldName={'password'} errors={model.validateErrors} />
                                  </div>
                              </div>
                          </div>
                          <div className="submit-btn">
                              <button type="submit" onClick={(event) => {
                                  event.preventDefault()
                                  model.loginSubmit()
                              }}>
                                  Submit
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          )
      } else {
          return (
              <LoadingLogo/>
          )
      }
  }
}