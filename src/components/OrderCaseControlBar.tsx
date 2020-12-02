import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setOrderCase } from '../redux/actions/OrderCaseAction';
import { RootReducerType } from '../redux/reducers/RootReducer';
import OrderCaseType from '../types/OrderCaseType';
import OrderCaseSwitchButton from './OrderCaseSwitchButton';

const OrderCaseControlBar = () => {

    const orderCaseList = [
        OrderCaseType.NAME,
        OrderCaseType.CAPITAL,
        OrderCaseType.REGION,
        OrderCaseType.ALPHA_CODE,
        OrderCaseType.CALLING_CODE,
    ];

    const dispatch = useDispatch();
    const currentOrderCase = useSelector((state: RootReducerType) => state.OrderCaseReducer);

    return (
        <div style={{ marginTop: "30px"}}>
            <ul>
                {
                    orderCaseList.map(c => (
                        <ListProp key={c}>
                            <OrderCaseSwitchButton onClick={() => {
                                if(currentOrderCase === c){
                                    dispatch(setOrderCase(OrderCaseType.NULL));
                                }else{
                                    dispatch(setOrderCase(c));
                                }
                            }} current={currentOrderCase} orderCase={c} />
                        </ListProp>
                    ))
                }
            </ul>
        </div>
    )
}

const ListProp = styled.li`
    display: inline;
`
export default OrderCaseControlBar
