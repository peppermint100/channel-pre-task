import CountryDataType from "../../types/CountryDataType";

export const REQUEST_COUNTRY_DATA = "REQUEST_COUNTRY_DATA" as const;
export const RECEIVE_COUNTRY_DATA = "RECEIVE_COUNTRY_DATA" as const;
export const FILTER_COUNTRY_DATA = "FILTER_COUNTRY_DATA" as const;

export const requestCountryData = ()=> ({
    type: REQUEST_COUNTRY_DATA
})

export const receiveCountryData = (payload: CountryDataType) => ({
    type: RECEIVE_COUNTRY_DATA,
    payload
})

//return type of actions
type RequestCountryDataType = ReturnType<typeof requestCountryData>;
type ReceiveCountryDataType = ReturnType<typeof receiveCountryData>;

export type CountryActionsType = RequestCountryDataType | ReceiveCountryDataType; 