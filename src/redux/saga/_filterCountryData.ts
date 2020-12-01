import { put, select } from "redux-saga/effects";
import CountryDataType from "../../types/CountryDataType";
import { filteredCountryData } from "../actions/FilteredCountryActions";
import { RootReducerType } from "../reducers/RootReducer";

export function* _filterCountryData({ payload } : { payload: string }){
    // select store state
    const currentCountryData: Array<CountryDataType> = yield select((state: RootReducerType) => state.CountryReducer);
    
    // filter store by searchbar
    const filteredCountries = currentCountryData.filter( country => {
        return country.name.toLowerCase().includes(payload.toLowerCase());
    })

    // trigger reducer
    yield put(filteredCountryData(filteredCountries));
}