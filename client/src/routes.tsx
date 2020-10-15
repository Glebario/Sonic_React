import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";

import {LoginPageView} from "./pages/AUTH/LoginPageView";
import {RegistrationPageView} from "./pages/AUTH/RegistrationPageView";
import IAuthModel from "./domain/models/interfaces/IAuthModel";
import IUserModel from "./domain/models/interfaces/IUserModel";

import NavBar from "./components/shared/NavBar/NavBar";
import {UserPageView} from "./pages/UserPageView";
import {SettingsPageView} from "./pages/SettingsPageView";
import {GuardRoute, GuardAuthRoute} from "./components/shared/GuardRoute";


// export type IModel = IAuthModel | IUserModel
// export interface IModels {
//     authModel: IAuthModel
//     userModel: IUserModel
// }

export const useRoutes: any = (isAuthenticated: boolean) => {
    return (
        <Switch>
            {
                isAuthenticated
                    &&
                <NavBar>
                    <Switch>
                        <GuardRoute Component={UserPageView} auth={isAuthenticated} path='/user/:userId'/>
                        <GuardRoute Component={SettingsPageView} auth={isAuthenticated} path='/settings' exact={true}/>
                        <Route path="*" render={() => "404 NOT FOUND"}/>
                    </Switch>
                </NavBar>
            }
            <GuardAuthRoute Component={LoginPageView} auth={isAuthenticated} path='/sign-in' exact={true} />
            <GuardAuthRoute Component={RegistrationPageView} auth={isAuthenticated} path='/sign-up' exact={true} />
            <Redirect to="/sign-in" />
        </Switch>
    )
}
