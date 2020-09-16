import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {LoginPageComponent} from "./view/login-page";
import {ModelState} from "../../../rootReducer";
import {login} from "../../../services/AuthHttpServices";
import {TypeOfConnect} from "../../../shared/interfaces /shared-interfaces";
import {includeLoadingLogo} from "../../../models/redux/actions-creators/sharedActionsCreators";


const connector = connect(
    (state: ModelState) => ({
        err: state.auth.err,
        isLoading: state.shared.isLoading,
    }),
    dispatch => bindActionCreators({
        includeLoadingLogo,
        login
    }, dispatch)
)
export const LoginPageController = connector(LoginPageComponent)


export type AuthLoginModelProps = {}
    & TypeOfConnect<typeof connector>
    ;

