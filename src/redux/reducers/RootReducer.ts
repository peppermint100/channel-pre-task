import { combineReducers } from "redux"; 
import CountryReducer from "./CountryReducer";
import SearchBarTextReducer from "./SearchBarTextReducer";
import FilteredCountryReducer from "./FilteredCountryReducer";

export const RootReducer = combineReducers({
    CountryReducer,
    SearchBarTextReducer,
    FilteredCountryReducer
});
export type RootReducerType = ReturnType<typeof RootReducer>; 