import React from 'react';
import { Route, Redirect } from "react-router-dom";


interface GuardProps {
    Component: any,
    path?: string
    exact?: boolean
    auth: boolean
}

export const GuardRoute = ({ Component, auth, ...rest }: GuardProps): JSX.Element => (
    <Route {...rest} render={() => (
        auth
            ? <Component />
            : <Redirect to={'/sign-in' + '?Authentication=none'} />
    )} />
)

export const GuardAuthRoute = ({ Component, auth, ...rest }: GuardProps): JSX.Element => (
    <Route {...rest} render={() => (
        !auth
            ? <Component />
            : <Redirect to={'/sign-in' + '?Authentication=none'} />
    )} />
)


