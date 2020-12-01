import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { RootReducerType } from '../redux/reducers/RootReducer'

const CountryList = () => {
    const countryData = useSelector((state: RootReducerType) => state.CountryReducer);

    const getData = () => {
        
    }

    return (
        <Container>
            <CustomButton onClick={getData}>데이터 불러오기</CustomButton>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
`

const CustomButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: #3498db;
    color: #fff;
    text-align: center;
    &:hover {
        opacity: .7;
    }
`

export default CountryList
