import { TakeableChannel } from "redux-saga";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_COUNTRY_DATA } from "../actions/CountryActions";
import { SET_ORDER_CASE } from "../actions/OrderCaseAction";
import { SET_SEARCH_BAR_TEXT } from "../actions/SearchBarTextActions";
import { _fetchCountryData } from "./_fetchCountryData";
import { _filterCountryData } from "./_filterCountryData";
import { _changeOrderState } from "./_changeOrderState";

export default function* mySaga() {
    yield takeLatest(REQUEST_COUNTRY_DATA, _fetchCountryData);
    yield takeEvery(SET_SEARCH_BAR_TEXT as unknown as TakeableChannel<unknown>, _filterCountryData);
    yield takeEvery(SET_ORDER_CASE as unknown as TakeableChannel<unknown>, _changeOrderState);
}