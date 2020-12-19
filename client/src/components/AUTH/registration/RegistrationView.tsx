import './RegistrationView.css';

import React from 'react';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';
import IAuthModel from '../../../domain/models/interfaces/IAuthModel';
import { ShowValidateError } from '../../shared/ShowValidateError';
import { LoadingLogo } from '../../shared/LoadingLogo';

interface IProps {
  model: IAuthModel
}

@observer
export default class RegistrationView extends React.Component<IProps> {
  public render(): JSX.Element {
    const { model } = this.props;

    if (!model.loadingLogo) {
      return (
        <div className="sign-up-page">
          <div className="btn-register">
            <small>
              У вас уже есть аккаунт?
              <br />
              Тогда вам сюда
              {'>>>'}
            </small>
            <Link to="/sign-in">Sign-In</Link>
          </div>

          <div className="sign-up-form">
            <form className="contact-form">

              {model.serverErrorMessage && (
              <div className="error">
                {model.serverErrorMessage}
              </div>
              )}

              {/*= ==================================Name==================== */}
              <div className="form-control-block">
                <label htmlFor="userName">
                  <span className="required">Name</span>
                  <div>
                    <input
                      name="userName"
                      type="userName"
                      id="userName"
                      placeholder="Name"
                      className="input-group"
                      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                        model.onUserNameQueryChanged(e.currentTarget.value);
                      }}
                      value={model.userNameQuery}
                    />
                    <div className="validation">
                      <ShowValidateError fieldName="userName" errors={model.validateErrors} />
                    </div>
                  </div>
                </label>
              </div>
              {/*= ==================================Country==================== */}
              <div className="form-control-block">
                <label htmlFor="country">
                  <span className="required">Country</span>
                  <div>
                    <input
                      name="country"
                      type="country"
                      id="country"
                      placeholder="Country"
                      className="input-group"
                      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                        model.onCountryQueryChanged(e.currentTarget.value);
                      }}
                      value={model.countryQuery}
                    />
                    <div className="validation">
                      <ShowValidateError fieldName="country" errors={model.validateErrors} />
                    </div>
                  </div>
                </label>
              </div>
              {/*= ==================================Gender==================== */}
              <div className="form-control-block">
                <span className="required">Gender:</span>
                <div className="row">
                  <div className="col-6" key="male">
                    <div className="radio-btn">
                      <label htmlFor="male" className="radio-btn-label">
                        <span>Male</span>
                        <input
                          type="radio"
                          value="male"
                          id="male"
                          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                            model.onGenderQueryChanged(e.currentTarget.value);
                          }}
                          checked={model.genderQuery === 'male'}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-6" key="female">
                    <div className="radio-btn">
                      <label htmlFor="female" className="radio-btn-label">
                        <span>Female</span>
                        <input
                          type="radio"
                          value="female"
                          id="female"
                          onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                            model.onGenderQueryChanged(e.currentTarget.value);
                          }}
                          checked={model.genderQuery === 'female'}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="validation">
                    <ShowValidateError fieldName="gender" errors={model.validateErrors} />
                  </div>
                </div>
              </div>
              {/*= ==================================EMAIL==================== */}
              <div className="form-control-block">
                <label htmlFor="email">
                  <span className="required">Email</span>
                  <div>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="input-group"
                      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                        model.onEmailQueryChanged(e.currentTarget.value);
                      }}
                      value={model.emailQuery}
                    />
                    <div className="validation">
                      <ShowValidateError fieldName="email" errors={model.validateErrors} />
                    </div>
                  </div>
                </label>
              </div>
              {/*= ==================================PASSWORD==================== */}
              <div className="form-control-block">
                <label htmlFor="password">
                  <span className="required">Password</span>
                  <div>
                    <input
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="input-group"
                      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                        model.onPasswordQueryChanged(e.currentTarget.value);
                      }}
                      value={model.passwordQuery}
                    />
                    <div className="validation">
                      <ShowValidateError fieldName="password" errors={model.validateErrors} />
                    </div>
                  </div>
                </label>
              </div>
              {/*= ==================================ConfirmPASSWORD==================== */}
              <div className="form-control-block">
                <label htmlFor="confirmPassword">
                  <span className="required">Confirm Password</span>
                  <div>
                    <input
                      name="confirmPassword"
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className="input-group"
                      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                        model.onConfirmPasswordQueryChanged(e.currentTarget.value);
                      }}
                      value={model.confirmPasswordQuery}
                    />
                    <div className="validation">
                      <ShowValidateError fieldName="confirmPassword" errors={model.validateErrors} />
                    </div>
                  </div>
                </label>
              </div>

              <div className="submit-btn">
                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    model.registrationSubmit();
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    return (
      <LoadingLogo />
    );
  }
}
