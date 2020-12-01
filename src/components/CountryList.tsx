import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootReducerType } from '../redux/reducers/RootReducer'

const CountryList = () => {
    const countryData = useSelector((state: RootReducerType) => state.CountryReducer);

    return (
        <div>
            
        </div>
    )
}

export default CountryList
