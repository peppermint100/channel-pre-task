import { TakeableChannel } from "redux-saga";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_COUNTRY_DATA } from "../actions/CountryActions";
import { SET_SEARCH_BAR_TEXT } from "../actions/SearchBarTextActions";
import { _fetchCountryData } from "./_fetchCountryData";
import { _filterCountryData } from "./_filterCountryData";

export default function* mySaga() {
    yield takeLatest(REQUEST_COUNTRY_DATA, _fetchCountryData);
    yield takeEvery(SET_SEARCH_BAR_TEXT as unknown as TakeableChannel<unknown>, _filterCountryData);
}