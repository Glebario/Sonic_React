import {connect} from "react-redux";
import {ModelState} from "../../../rootReducer";
import {bindActionCreators} from "redux";
import {TypeOfConnect} from "../../../shared/interfaces /shared-interfaces";
import {RegistrationPageComponent} from "./view/registraton-page";
import {registration} from "../../../services/AuthHttpServices";
import {includeLoadingLogo} from "../../../models/redux/actions-creators/sharedActionsCreators";


const connector = connect(
    (state: ModelState) => ({
        err: state.auth.err,
        isLoading: state.shared.isLoading,
    }),
    dispatch => bindActionCreators({
        includeLoadingLogo,
        registration
    }, dispatch)
)
export const RegistrationPageController = connector(RegistrationPageComponent)


export type AuthRegistrationModelProps = {}
    & TypeOfConnect<typeof connector>
    ;

