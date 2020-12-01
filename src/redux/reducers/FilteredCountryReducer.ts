import CountryDataType from "../../types/CountryDataType";
import { FILTERED_COUNTRY_DATA, FitleredCountryActionsType } from "../actions/FilteredCountryActions";


const intialState: Array<CountryDataType> = [];

const FilteredCountryReducer = (state: Array<CountryDataType> = intialState, action: FitleredCountryActionsType) => {
    switch(action.type){
        case FILTERED_COUNTRY_DATA:
            return action.payload;
        default:
            return state;
    }
}

export default FilteredCountryReducer;