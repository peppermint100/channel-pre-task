import OrderCaseType from "../../types/OrderCaseType";

export const SET_DSC_ORDER_CASE = "SET_DSC_ORDER_CASE" as const;
export const SET_ASC_ORDER_CASE = "SET_ASC_ORDER_CASE" as const;

export const setDscOrderCase = (payload: OrderCaseType) => ({
    type: SET_DSC_ORDER_CASE,
    payload
})

export const setAscOrderCase = (payload: OrderCaseType) => ({
    type: SET_ASC_ORDER_CASE,
    payload
})

type setDscOrderCaseType = ReturnType<typeof setDscOrderCase>;
type setAscOrderCaseType = ReturnType<typeof setAscOrderCase>;


export type OrderCaseActionType = setDscOrderCaseType | setAscOrderCaseType;

