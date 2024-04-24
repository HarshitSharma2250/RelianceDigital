import { legacy_createStore } from "redux";
import { combineReducers ,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import { CityNameBYPinCode } from "./reducer";

const rootreducer=combineReducers({PinCode:CityNameBYPinCode})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))