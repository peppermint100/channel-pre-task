import CountryDataType from "../../types/CountryDataType";
import OrderCaseType from "../../types/OrderCaseType";
import { ADD_COUNTRY_DATA, CHANGE_DSC_ORDER_CASE_COUNTRY_DATA, CHANGE_ASC_ORDER_CASE_COUNTRY_DATA, DELETE_COUNTRY_DATA, FILTERED_COUNTRY_DATA, FitleredCountryActionsType } from "../actions/FilteredCountryActions";

const intialState: Array<CountryDataType> = [];

const FilteredCountryReducer = (state: Array<CountryDataType> = intialState, action: FitleredCountryActionsType) => {
    let updatedState: Array<CountryDataType> = state.slice();

    switch(action.type){
        case FILTERED_COUNTRY_DATA:
            return action.payload;
        case CHANGE_ASC_ORDER_CASE_COUNTRY_DATA:
            let orderCase = action.payload;
            let originalState = action.originalState;

            switch(orderCase){
                case OrderCaseType.NAME:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.name.toLowerCase(),
                            fb = b.name.toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.ALPHA_CODE:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.alpha2Code.toLowerCase(),
                            fb = b.alpha2Code.toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.CALLING_CODE:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.callingCodes[0].toLowerCase(),
                            fb = b.callingCodes[0].toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.CAPITAL:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.capital.toLowerCase(),
                            fb = b.capital.toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.REGION:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.region.toLowerCase(),
                            fb = b.region.toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
            }
          
            return updatedState;
        case CHANGE_DSC_ORDER_CASE_COUNTRY_DATA:
            orderCase = action.payload;
            originalState = action.originalState;

            switch(orderCase){
                case OrderCaseType.NAME:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.name.toLowerCase(),
                            fb = b.name.toLowerCase();

                        if (fa < fb) {
                            return 1;
                        }
                        if (fa > fb) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.ALPHA_CODE:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.alpha2Code.toLowerCase(),
                            fb = b.alpha2Code.toLowerCase();

                        if (fa < fb) {
                            return 1;
                        }
                        if (fa > fb) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.CALLING_CODE:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.callingCodes[0].toLowerCase(),
                            fb = b.callingCodes[0].toLowerCase();

                        if (fa < fb) {
                            return 1;
                        }
                        if (fa > fb) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.CAPITAL:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.capital.toLowerCase(),
                            fb = b.capital.toLowerCase();

                        if (fa < fb) {
                            return 1;
                        }
                        if (fa > fb) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case OrderCaseType.REGION:
                    updatedState = updatedState.sort((a, b) => {
                        const fa = a.region.toLowerCase(),
                            fb = b.region.toLowerCase();

                        if (fa < fb) {
                            return 1;
                        }
                        if (fa > fb) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
            }
          
            return updatedState;

        case DELETE_COUNTRY_DATA:
            const target = action.payload;

            updatedState = updatedState.filter((country) => {
                return country.alpha2Code !== target;
            });

            return updatedState;

        case ADD_COUNTRY_DATA:
            const countryToAdd = action.payload;
            
            updatedState = [countryToAdd, ...updatedState];

            return updatedState;
        default:
            return state;
    }
}

export default FilteredCountryReducer;