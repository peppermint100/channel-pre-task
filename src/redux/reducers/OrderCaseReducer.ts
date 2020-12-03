import OrderCaseType from "../../types/OrderCaseType";
import { OrderCaseActionType, SET_ASC_ORDER_CASE, SET_DSC_ORDER_CASE } from "../actions/OrderCaseAction";

const initialState: OrderCaseType = OrderCaseType.NULL; 

const OrderCaseReducer = (state: OrderCaseType = initialState, action: OrderCaseActionType) => {
    switch(action.type){
        case SET_DSC_ORDER_CASE:
            return action.payload;
        case SET_ASC_ORDER_CASE:
            return action.payload;
        default:
            return state;
    }
}

export default OrderCaseReducer;