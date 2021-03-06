import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { requestCountryData } from '../redux/actions/CountryActions';
import { deleteCountryData } from '../redux/actions/FilteredCountryActions';
import { setSearchBarText } from '../redux/actions/SearchBarTextActions';
import { RootReducerType } from '../redux/reducers/RootReducer'
import CountryDataType from '../types/CountryDataType';

const CountryList:React.FC = () => {
    const dispatch = useDispatch();
    const filterCountries: Array<CountryDataType> | undefined = useSelector((state: RootReducerType) => state.FilteredCountryReducer);

    // observer should not be effected by state changing
    const observer = useRef<IntersectionObserver>();

    const [currentLastIndex, setCurrentLastIndex] = useState(10);

    const lastItemRef = useCallback( node => {
        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver( entries => {
            if(entries[0].isIntersecting){
                setCurrentLastIndex( current => current + 10);
            }
        })

        if(node) observer.current.observe(node);
    }, []); 


    const getData = () => {
        dispatch(setSearchBarText(""));
    }

    const deleteCountry = (code: string) => {
        dispatch(deleteCountryData(code));
    }

    useEffect(() => {
        dispatch(requestCountryData());
    }, [])

    return (
        <Container>
            {
                !filterCountries.length ?
                <>
                    <CustomButton onClick={getData}>데이터 불러오기</CustomButton>
                </>
                : (
                    <Unordered>
                        { filterCountries.slice(0, currentLastIndex).map((data, idx) => {
                            if(idx+1 === currentLastIndex){
                                return (<Card ref={lastItemRef} key={data.alpha2Code}>
                                    <HeaderText>{data.name}, {data.alpha2Code}</HeaderText>
                                    <p>calling code : +{data.callingCodes}</p>
                                    <p>capital : {data.capital}</p>
                                    <p>region : {data.region}</p>
                                    <DeleteButton onClick={() => {deleteCountry(data.alpha2Code)}}>Delete</DeleteButton>
                                </Card>)
                            }
                            else{
                                return (<Card key={data.alpha2Code}>
                                    <HeaderText>{data.name}, {data.alpha2Code}</HeaderText>
                                    <p>calling code : +{data.callingCodes}</p>
                                    <p>capital : {data.capital}</p>
                                    <p>region : {data.region}</p>
                                    <DeleteButton onClick={() => {deleteCountry(data.alpha2Code)}}>Delete</DeleteButton>
                                </Card>)
                            }
                        })}
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

const DeleteButton = styled.button`
    margin: 10px;
    width: 80px;
    height: 40px;
    text-align: center;
    color: #fff;
    background-color: #e74c3c;
    transition: opacity .3s ease; 
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        opacity: .8;
    }
`

export default CountryList
