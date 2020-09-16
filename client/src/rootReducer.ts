import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import auth from "./models/redux/reducers/authReducer";
import shared from "./models/redux/reducers/sharedReducer";


const rootReducer = combineReducers({
    auth,
    shared,
    form: formReducer,
})
export type ModelState = ReturnType<typeof rootReducer>
export default rootReducer
