import { takeLatest } from "redux-saga/effects";
import { REQUEST_COUNTRY_DATA } from "../actions/CountryActions";
import { _fetchCountryData } from "./_fetchCountryData";

export default function* mySaga() {
    yield takeLatest(REQUEST_COUNTRY_DATA, _fetchCountryData);
}