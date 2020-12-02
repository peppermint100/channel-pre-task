import CountryDataType from "../../types/CountryDataType";
import OrderCaseType from "../../types/OrderCaseType";

export const FILTERED_COUNTRY_DATA = "TRIGGER_FILTER_COUNTRY_DATA" as const;
export const CHANGE_ORDER_CASE_COUNTRY_DATA = "CHANGE_ORDER_CASE_COUNTRY_DATA" as const;
export const DELETE_COUNTRY_DATA = "DELETE_COUNTRY_DATA" as const;
export const ADD_COUNTRY_DATA = "ADD_COUNTRY_DATA" as const;

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

export const deleteCountryData = (payload: string) => ({
    type: DELETE_COUNTRY_DATA,
    payload
})

export const addCountryData = (payload: CountryDataType) => ({
    type: ADD_COUNTRY_DATA,
    payload
})

type filteredCountryDataType = ReturnType<typeof filteredCountryData>
type changeOrderCaseCountryDataType = ReturnType<typeof changeOrderCaseCountryData>
type deleteCountryDataType = ReturnType<typeof deleteCountryData>
type addCountryDataType = ReturnType<typeof addCountryData>

export type FitleredCountryActionsType =  filteredCountryDataType | changeOrderCaseCountryDataType | deleteCountryDataType | addCountryDataType;