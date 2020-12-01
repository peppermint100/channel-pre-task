import { combineReducers } from "redux"; 
import CountryReducer from "./CountryReducer";

export const RootReducer = combineReducers({
    CountryReducer
});
export type RootReducerType = ReturnType<typeof RootReducer>; 