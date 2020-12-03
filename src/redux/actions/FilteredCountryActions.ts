import CountryDataType from "../../types/CountryDataType";
import OrderCaseType from "../../types/OrderCaseType";

export const FILTERED_COUNTRY_DATA = "TRIGGER_FILTER_COUNTRY_DATA" as const;
export const CHANGE_DSC_ORDER_CASE_COUNTRY_DATA = "CHANGE_DSC_ORDER_CASE_COUNTRY_DATA" as const;
export const CHANGE_ASC_ORDER_CASE_COUNTRY_DATA = "CHANGE_ASC_ORDER_CASE_COUNTRY_DATA" as const;
export const DELETE_COUNTRY_DATA = "DELETE_COUNTRY_DATA" as const;
export const ADD_COUNTRY_DATA = "ADD_COUNTRY_DATA" as const;

// triggered by saga
export const filteredCountryData = (payload: Array<CountryDataType>) => ({
    type: FILTERED_COUNTRY_DATA,
    payload
})

export const changeDscOrderCaseCountryData = (payload: OrderCaseType, originalState: Array<CountryDataType>) => ({
    type: CHANGE_DSC_ORDER_CASE_COUNTRY_DATA,
    payload,
    originalState
})

export const changeAscOrderCaseCountryData = (payload: OrderCaseType, originalState: Array<CountryDataType>) => ({
    type: CHANGE_ASC_ORDER_CASE_COUNTRY_DATA,
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
type changeDscOrderCaseCountryDataType = ReturnType<typeof changeDscOrderCaseCountryData>
type changeAscOrderCaseCountryDataType = ReturnType<typeof changeAscOrderCaseCountryData>
type deleteCountryDataType = ReturnType<typeof deleteCountryData>
type addCountryDataType = ReturnType<typeof addCountryData>

export type FitleredCountryActionsType =  filteredCountryDataType | changeAscOrderCaseCountryDataType | changeDscOrderCaseCountryDataType | deleteCountryDataType | addCountryDataType;