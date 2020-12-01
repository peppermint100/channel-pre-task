import { call, put } from "redux-saga/effects";
import { receiveCountryData } from "../actions/CountryActions";
import { filteredCountryData } from "../actions/FilteredCountryActions";
import getData from "./../../api";

export function* _fetchCountryData(){
    // api call
    const data = yield call(getData);

    // reducer call
    yield put(receiveCountryData(data));
    yield put(filteredCountryData(data));
}