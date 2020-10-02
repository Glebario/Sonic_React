import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";

import {LoginPageView} from "./pages/AUTH/login/LoginPageView";
import {RegistrationPageView} from "./pages/AUTH/registration/RegistrationPageView";
import IAuthModel from "./domain/models/AUTH/interfaces/IAuthModel";



export const useRoutes: any = (isAuthenticated: boolean, model: IAuthModel) => {
    if(isAuthenticated) {
        const mainModel = model
        return (
            []
        )
    }
    else {
        const authModel = model
        return (
            <Switch>
                <Route
                    path="/sign-in"
                    render={() =>
                        <LoginPageView model={authModel}/>
                    }
                />
                <Route
                    path="/sign-up"
                    render={() =>
                        <RegistrationPageView model={authModel}/>
                    }
                />
                <Redirect to="/sign-in" />
            </Switch>
        )
    }
}
