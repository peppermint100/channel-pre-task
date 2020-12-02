import CountryDataType from "../../types/CountryDataType";
import OrderCaseType from "../../types/OrderCaseType";
import { CHANGE_ORDER_CASE_COUNTRY_DATA, FILTERED_COUNTRY_DATA, FitleredCountryActionsType } from "../actions/FilteredCountryActions";

const intialState: Array<CountryDataType> = [];

const FilteredCountryReducer = (state: Array<CountryDataType> = intialState, action: FitleredCountryActionsType) => {
    switch(action.type){
        case FILTERED_COUNTRY_DATA:
            return action.payload;
        case CHANGE_ORDER_CASE_COUNTRY_DATA:

            const orderCase = action.payload;
            const originalState = action.originalState;

            let orderedState: Array<CountryDataType> = state.slice();
            switch(orderCase){
                case OrderCaseType.NAME:
                    orderedState = orderedState.sort((a, b) => {
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
                    orderedState = orderedState.sort((a, b) => {
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
                    orderedState = orderedState.sort((a, b) => {
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
                    orderedState = orderedState.sort((a, b) => {
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
                    orderedState = orderedState.sort((a, b) => {
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
                case OrderCaseType.NULL:
                    orderedState = originalState;
                    break;
            }
          
            return orderedState;

        default:
            return state;
    }
}

export default FilteredCountryReducer;