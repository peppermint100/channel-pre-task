import React from 'react'
import styled from 'styled-components'
import OrderCaseType from '../types/OrderCaseType'

interface Props {
    current: OrderCaseType;
    orderCase: OrderCaseType;
    onClick: () => void;
}

interface StyledProps {
    current: OrderCaseType;
    orderCase: OrderCaseType;
}
const OrderCaseSwitchButton: React.FC<Props> = ({ current, onClick, orderCase }) => {
    return (
        <Container current={current} orderCase={orderCase} onClick={onClick}>
            { orderCase }
        </Container>
    )
}
const Container = styled.button<StyledProps>`
    margin: 10px;
    background-color: ${props => props.current === props.orderCase ? "#e74c3c" : "#3498db"}; 
    width: 100px;
    height: 50px;
    text-align: center;
    color: #fff;
    transition: background-color .3s ease-in-out;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        background-color: #e74c3c;
    }
`

export default OrderCaseSwitchButton
