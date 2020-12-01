import React from 'react'
import styled from 'styled-components'
import { Field, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { setSearchBarText } from '../redux/actions/SearchBarTextActions';

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Formik initialValues={{}} onSubmit={( _, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitting(false);
            }}>
                <Field
                    component={TextInput}
                    name="searchText"
                    type="text"
                    onChange={(e:any) => {
                        dispatch(setSearchBarText(e.target.value));
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
