import CountryDataType from "../../types/CountryDataType";
import { CountryActionsType } from "../actions/CountryActions";
import { RECEIVE_COUNTRY_DATA } from "./../actions/CountryActions";

const initialState = null;

const CountryReducer = (state:Array<CountryDataType> | null = initialState, action: CountryActionsType) => {
    // triggered by saga
    switch(action.type){
        case RECEIVE_COUNTRY_DATA:
            return action.payload;
        default:
            return state;
    }
}

export default CountryReducer;