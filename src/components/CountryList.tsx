import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { requestCountryData } from '../redux/actions/CountryActions';
import { setSearchBarText } from '../redux/actions/SearchBarTextActions';
import { RootReducerType } from '../redux/reducers/RootReducer'
import CountryDataType from '../types/CountryDataType';

const CountryList = () => {
    const dispatch = useDispatch();
    const filterCountries: Array<CountryDataType> | undefined = useSelector((state: RootReducerType) => state.FilteredCountryReducer);

    const getData = () => {
        dispatch(setSearchBarText(""));
    }

    useEffect(() => {
        dispatch(requestCountryData());
    }, [])

    return (
        <Container>
            {
                !filterCountries.length ? <CustomButton onClick={getData}>데이터 불러오기</CustomButton>
                : (
                    <Unordered>
                        { filterCountries.map((data) => (
                            <Card key={data.alpha2Code}>
                                <HeaderText>{data.name}, {data.alpha2Code}</HeaderText>
                                <p>calling code : +{data.callingCodes}</p>
                                <p>capital : {data.capital}</p>
                                <p>region : {data.region}</p>
                            </Card>
                        )) }
                    </Unordered>
                )
            }
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

const Unordered = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Card = styled.li`
    width: 300px;
    min-height: 120px;
    margin: 20px;
    border: 2px solid #bdc3c7;
    text-align: center;
`

const HeaderText = styled.p`
    font-size: 18px;
    font-weight: 700;
`

export default CountryList
