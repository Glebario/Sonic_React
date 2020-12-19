import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface GuardProps extends RouteProps {
  Component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  auth: boolean
  children?: React.ReactNode
}

// export const GuardRoute = ({
//   exact = false, auth, path, children, component: Component,
// }: GuardProps): JSX.Element => (
//   <Route
//     path={path}
//     exact={exact}
//     render={({ history, match }) => (
//       auth
//         ? <Component history={history} match={match} children={children} />
//         : <Redirect to={'/sign-in\' \'?Authentication=none'} />
//     )}
//   />
// );

export const GuardRoute = (props: GuardProps) => {
  const {
    Component,
    children,
    auth,
    path,
    exact,
  } = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (auth) {
          return Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            ? <Component {...routeProps} />
            : children;
        }
        return <Redirect to="/sign-in" />;
      }}
    />
  );
};
