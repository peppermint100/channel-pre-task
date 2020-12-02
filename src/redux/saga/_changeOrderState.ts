import { put, select } from "redux-saga/effects";
import CountryDataType from "../../types/CountryDataType";
import OrderCaseType from "../../types/OrderCaseType";
import { changeOrderCaseCountryData } from "../actions/FilteredCountryActions";
import { RootReducerType } from "../reducers/RootReducer";

export function* _changeOrderState({ payload } : { payload: OrderCaseType }){

    const originalState = yield select((state: RootReducerType) => state.CountryReducer);

    yield put(changeOrderCaseCountryData(payload, originalState));
}