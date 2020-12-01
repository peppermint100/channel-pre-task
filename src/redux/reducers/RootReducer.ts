import { combineReducers } from "redux"; 
import CountryReducer from "./CountryReducer";
import SearchBarTextReducer from "./SearchBarTextReducer";
import FilteredCountryReducer from "./FilteredCountryReducer";
import OrderCaseReducer from "./OrderCaseReducer";
    

export const RootReducer = combineReducers({
    CountryReducer,
    SearchBarTextReducer,
    FilteredCountryReducer,
    OrderCaseReducer
});
export type RootReducerType = ReturnType<typeof RootReducer>; 