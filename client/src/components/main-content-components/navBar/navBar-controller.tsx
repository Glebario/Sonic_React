import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {TypeOfConnect} from "../../../shared/interfaces /shared-interfaces";
import {navBar} from "./view/navBar";


const connector = connect(
    null,
    dispatch => bindActionCreators({

    }, dispatch)
)
export const NavBarController = connector(navBar)


export type MainNavBarModelProps = {}
    & TypeOfConnect<typeof connector>
    ;
