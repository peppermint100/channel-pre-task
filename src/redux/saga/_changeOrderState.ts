import { put, select } from "redux-saga/effects";
import OrderCaseType from "../../types/OrderCaseType";
import { changeAscOrderCaseCountryData, changeDscOrderCaseCountryData } from "../actions/FilteredCountryActions";
import { RootReducerType } from "../reducers/RootReducer";

export function* _changeDscOrderState({ payload } : { payload: OrderCaseType }){

    const originalState = yield select((state: RootReducerType) => state.CountryReducer);

    yield put(changeDscOrderCaseCountryData(payload, originalState));
}

export function* _changeAscOrderState({ payload } : { payload: OrderCaseType }){

    const originalState = yield select((state: RootReducerType) => state.CountryReducer);

    yield put(changeAscOrderCaseCountryData(payload, originalState));
}