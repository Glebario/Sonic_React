import * as authActions from "../redux/actions-creators/authActionsCreators";
import * as sharedActions from "../redux/actions-creators/sharedActionsCreators";
import {InferValueTypes} from "../../shared/interfaces /shared-interfaces";

export type authActionsType = ReturnType<InferValueTypes<typeof authActions>>
export type totalActionsType = ReturnType<InferValueTypes<typeof sharedActions>>
