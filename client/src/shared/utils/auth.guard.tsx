import React from 'react';
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

interface GuardProps {
    Component: React.FC<RouteComponentProps>,
    path?: string
    auth: boolean
}

const GuardRoute = ({ Component, auth, ...rest }: GuardProps): JSX.Element => (
    <Route {...rest} render={(props: RouteComponentProps) => (
        auth
            ? <Component {...props} />
            : <Redirect to={'/sign-in' + '?Authentication=none'} />
    )} />
)

export default GuardRoute;



