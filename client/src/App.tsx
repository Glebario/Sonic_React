import React from 'react';
import {useRoutes} from "./routes";
import {connect} from "react-redux";
import {ModelState} from "./rootReducer";
import {TypeOfConnect} from "./shared/interfaces /shared-interfaces";





function App({isAuthenticated}: ModelProps) {
    const routes = useRoutes(isAuthenticated)
  return (
      <div>
          {routes}
      </div>
  );
}




const connector = connect(
    (state: ModelState) => ({
        isAuthenticated: state.auth.isAuthenticated
    })
)
export default connector(App)
export type ModelProps = {}
    & TypeOfConnect<typeof connector>
    ;
