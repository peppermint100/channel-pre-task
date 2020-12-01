import { combineReducers } from "redux"; 
import CountryReducer from "./CountryReducer";
import FilteredSearchTextReducer from "./FilteredSearchTextReducer";

export const RootReducer = combineReducers({
    CountryReducer,
    FilteredSearchTextReducer
});
export type RootReducerType = ReturnType<typeof RootReducer>; 