import {connect} from "react-redux";
import {ModelState} from "../../../rootReducer";
import {bindActionCreators} from "redux";
import {SettingsPageComponent} from "./view/settings-page";
import {TypeOfConnect} from "../../../shared/interfaces /shared-interfaces";
import {defaultState} from "../../../models/redux/actions-creators/authActionsCreators";


const connector = connect(
    null,
    dispatch => bindActionCreators({
        defaultState
    }, dispatch)
)
export const SettingsPageController = connector(SettingsPageComponent)


export type MainSettingsModelProps = {}
    & TypeOfConnect<typeof connector>
    ;
