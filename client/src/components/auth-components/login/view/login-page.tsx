import React from 'react'
import {Link} from "react-router-dom"
import './login-page.css'
import LoginForm from "./forms/login-form";
import {LoadingLogo} from "../../../../shared/components/shared.loadingLogo";
import {AuthLoginModelProps} from "../login-controller";


export const LoginPageComponent: React.FC<AuthLoginModelProps> = (model: AuthLoginModelProps ) => {
    //console.log(model)

    if ( !model.isLoading) {
        return (
            <div className="sign-in-page">
                <div className="btn-register">
                    <small>У вас нет аккаунта?<br/>Тогда вам сюда>>></small><Link to="/sign-up">Registration</Link>
                </div>
                <LoginForm includeLoadingLogo={model.includeLoadingLogo} login={model.login} err={model.err} />
            </div>
        )
    }
    else {
        return (
            <LoadingLogo />
        )
    }


}




