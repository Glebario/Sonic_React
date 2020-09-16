import {totalActionsType} from "../../interfaces/ActionsType";
import {SharedState} from "../../interfaces/totalInterfaces";
import {sharedActions} from "../actions/sharedActions";

const initialState: SharedState = {
    isLoading: false
}

export default (state = initialState, action: totalActionsType) => {
    //console.log(action)
    switch(action.type) {
        case sharedActions.INCLUDE_LOADING_LOGO:
            return {
                ...state,
                isLoading: action.changer
            };




        default:
            return state;
    }
}
