import CountryDataType from "../../types/CountryDataType";
import { CountryActionsType, FILTER_COUNTRY_DATA } from "../actions/CountryActions";
import { RECEIVE_COUNTRY_DATA } from "./../actions/CountryActions";

const initialState = null;

const CountryReducer = (state:Array<CountryDataType> | null = initialState, action: CountryActionsType) => {
    // triggered by saga

    switch(action.type){
        case RECEIVE_COUNTRY_DATA:
            return action.payload;
        case FILTER_COUNTRY_DATA:
            const target = action.payload.toLowerCase();
            
            const filteredCountries = state?.filter( (country:CountryDataType) => (
                country.name.toLowerCase().includes(target)
            ))

            return filteredCountries;
        default:
            return state;
    }
}

export default CountryReducer;