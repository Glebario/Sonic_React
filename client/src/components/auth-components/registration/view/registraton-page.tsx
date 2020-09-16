import React from 'react'
import './registration-page.css'
import {Link} from "react-router-dom";
import {LoadingLogo} from "../../../../shared/components/shared.loadingLogo";
import {AuthRegistrationModelProps} from "../registration-controller";
import RegistrationForm from "./forms/registration-form";


export const RegistrationPageComponent: React.FC<AuthRegistrationModelProps> = (model: AuthRegistrationModelProps ) => {


    if( !model.isLoading ) {
        return (
            <div className="sign-up-page">
                <div className="btn-register">
                    <small>У вас уже есть аккаунт?<br />Тогда вам сюда>>></small><Link to="/sign-in">Sign-In</Link>
                </div>
                <RegistrationForm includeLoadingLogo={model.includeLoadingLogo} err={model.err} registration={model.registration}/>
            </div>
        )
    }
    else {
        return (
            <LoadingLogo />
        )
    }
}
