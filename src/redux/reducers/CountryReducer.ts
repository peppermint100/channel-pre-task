import CountryDataType from "../../types/CountryDataType";
import { CountryActionsType } from "../actions/CountryActions";
import { RECEIVE_COUNTRY_DATA } from "./../actions/CountryActions";

const initialState = null;

// triggered by saga
const CountryReducer = (state:CountryDataType | null = initialState, action: CountryActionsType) => {
    if(action.type === RECEIVE_COUNTRY_DATA){
        return action.payload;
    }else{
        return state;
    }
}

export default CountryReducer;