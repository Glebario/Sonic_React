import {sharedActions} from "../actions/sharedActions";


export function includeLoadingLogo(changer: boolean) {
    return {
        type: sharedActions.INCLUDE_LOADING_LOGO,
        changer
    };
}

export function defaultState() {
    return {
        type: sharedActions.DEFAULT_STATE,
    };
}

