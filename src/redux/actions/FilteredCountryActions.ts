import CountryDataType from "../../types/CountryDataType";

export const FILTERED_COUNTRY_DATA = "TRIGGER_FILTER_COUNTRY_DATA" as const;

// triggered by saga
export const filteredCountryData = (payload: Array<CountryDataType>) => ({
    type: FILTERED_COUNTRY_DATA,
    payload
})

type filteredCountryDataType = ReturnType<typeof filteredCountryData>

export type FitleredCountryActionsType =  filteredCountryDataType;