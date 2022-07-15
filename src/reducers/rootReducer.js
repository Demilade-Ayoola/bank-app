import {combineReducers} from "redux";
import {bankingReducer,} from "./bankingReducers";
import {authReducer} from "./auth";

export const rootReducer = combineReducers({
    auth: authReducer,
    banking: bankingReducer,
}) 