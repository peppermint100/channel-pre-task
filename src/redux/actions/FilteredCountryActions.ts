import CountryDataType from "../../types/CountryDataType";
import OrderCaseType from "../../types/OrderCaseType";

export const FILTERED_COUNTRY_DATA = "TRIGGER_FILTER_COUNTRY_DATA" as const;
export const CHANGE_ORDER_CASE_COUNTRY_DATA = "CHANGE_ORDER_CASE_COUNTRY_DATA" as const;

// triggered by saga
export const filteredCountryData = (payload: Array<CountryDataType>) => ({
    type: FILTERED_COUNTRY_DATA,
    payload
})

export const changeOrderCaseCountryData = (payload: OrderCaseType, originalState: Array<CountryDataType>) => ({
    type: CHANGE_ORDER_CASE_COUNTRY_DATA,
    payload,
    originalState
})

type filteredCountryDataType = ReturnType<typeof filteredCountryData>
type changeOrderCaseCountryDataType = ReturnType<typeof changeOrderCaseCountryData>

export type FitleredCountryActionsType =  filteredCountryDataType | changeOrderCaseCountryDataType;