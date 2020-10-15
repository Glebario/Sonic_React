import './RegistrationView.css'

import React from "react";
import IAuthModel from "../../../domain/models/interfaces/IAuthModel";
import {observer} from "mobx-react";

import {Link} from "react-router-dom";
import {History} from "history"
import {ShowValidateError} from "../../shared/ShowValidateError";
import {LoadingLogo} from "../../shared/LoadingLogo";

interface IProps {
    model: IAuthModel
    history: History
}

@observer
export default class RegistrationView extends React.Component<IProps> {
    public render(): JSX.Element {
        const {model, history} = this.props;

        if (!model.loadingLogo) {
            return (
                <div className="sign-up-page">
                    <div className="btn-register">
                        <small>У вас уже есть аккаунт?<br />Тогда вам сюда{">>>"}</small><Link to="/sign-in">Sign-In</Link>
                    </div>

                    <div className="sign-up-form">
                        <form className="contact-form">

                            {
                                model.serverErrorMessage
                                &&
                                <div className="error">
                                    {model.serverErrorMessage}
                                </div>
                            }


                            {/*===================================Name====================*/}
                            <div className="form-control-block">
                                <label className="required">Name</label>
                                <div>
                                    <input
                                        name="userName"
                                        type="userName"
                                        placeholder="Name"
                                        className="input-group"
                                        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                                            model.onUserNameQueryChanged(e.currentTarget.value);
                                        }}
                                        value={model.userNameQuery}
                                    />
                                    <div className="validation">
                                        <ShowValidateError fieldName={'userName'} errors={model.validateErrors} />
                                    </div>
                                </div>
                            </div>
                            {/*===================================Country====================*/}
                            <div className="form-control-block">
                                <label className="required">Country</label>
                                <div>
                                    <input
                                        name="country"
                                        type="country"
                                        placeholder="Country"
                                        className="input-group"
                                        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                                            model.onCountryQueryChanged(e.currentTarget.value);
                                        }}
                                        value={model.countryQuery}
                                    />
                                    <div className="validation">
                                        <ShowValidateError fieldName={'country'} errors={model.validateErrors} />
                                    </div>
                                </div>
                            </div>
                            {/*===================================Gender====================*/}
                            <div className="form-control-block">
                                <label className="required">Gender:</label>
                                <div className="row">
                                    <div className="col-6" key="male">
                                        <div className="radio-btn">
                                            <label className="radio-btn-label">
                                                <input
                                                    type="radio"
                                                    value="male"
                                                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                                                        model.onGenderQueryChanged(e.currentTarget.value);
                                                    }}
                                                    checked={ model.genderQuery === 'male'}
                                                />
                                                <span>Male</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6" key="female">
                                        <div className="radio-btn">
                                            <label className="radio-btn-label">
                                                <input
                                                    type="radio"
                                                    value="female"
                                                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                                                        model.onGenderQueryChanged(e.currentTarget.value);
                                                    }}
                                                    checked={ model.genderQuery === 'female'}
                                                />
                                                <span>Female</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="validation">
                                        <ShowValidateError fieldName={'gender'} errors={model.validateErrors} />
                                    </div>
                                </div>
                            </div>
                            {/*===================================EMAIL====================*/}
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
                            {/*===================================PASSWORD====================*/}
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
                            {/*===================================ConfirmPASSWORD====================*/}
                            <div className="form-control-block">
                                <label className="required">Confirm Password</label>
                                <div>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="input-group"
                                        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                                            model.onConfirmPasswordQueryChanged(e.currentTarget.value);
                                        }}
                                        value={model.confirmPasswordQuery}
                                    />
                                    <div className="validation">
                                        <ShowValidateError fieldName={'confirmPassword'} errors={model.validateErrors} />
                                    </div>
                                </div>
                            </div>


                            <div className="submit-btn">
                                <button type="submit" onClick={(event) => {
                                    event.preventDefault()
                                    model.registrationSubmit()
                                    history.push("/sign-in")
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
