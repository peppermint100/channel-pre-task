import { combineReducers } from "redux"; 
import CountryReducer from "./CountryReducer";
import SearchBarTextReducer from "./SearchBarTextReducer";
import FilteredCountryReducer from "./FilteredCountryReducer";
import OrderCaseReducer from "./OrderCaseReducer";
import ModalReducer from "./ModalReducer";
    

export const RootReducer = combineReducers({
    CountryReducer,
    SearchBarTextReducer,
    FilteredCountryReducer,
    OrderCaseReducer,
    ModalReducer
});
export type RootReducerType = ReturnType<typeof RootReducer>; 