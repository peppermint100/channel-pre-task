import OrderCaseType from "../../types/OrderCaseType";

export const SET_ORDER_CASE = "SET_ORDER_CASE" as const;

export const setOrderCase = (payload: OrderCaseType) => ({
    type: SET_ORDER_CASE,
    payload
})

type setOrderCaseType = ReturnType<typeof setOrderCase>;

export type OrderCaseActionType = setOrderCaseType;

