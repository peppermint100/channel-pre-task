import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Field, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { filterCountryData } from '../redux/actions/CountryActions';

const SearchBar = () => {
    const dispatch = useDispatch();

    useEffect(() => {

    })

    return (
        <div>
            <Formik initialValues={{ searchText: "" }} onSubmit={( data, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitting(false);
            }}>
                <Field
                    component={TextInput}
                    name="searchText"
                    type="text"
                    onChange={(e:any) => {
                        console.log(e.target.value);
                        dispatch(filterCountryData(e.target.value));
                    }}
                />

            </Formik>
        </div>
    )
}

const TextInput = styled.input`
    border: 1px solid #bdc3c7;
    width: 400px;
    height: 50px;
`

export default SearchBar
