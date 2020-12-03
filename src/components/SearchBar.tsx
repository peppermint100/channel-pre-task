import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Field, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { setSearchBarText } from '../redux/actions/SearchBarTextActions';
import _ from "lodash";

const SearchBar:React.FC = () => {
    const dispatch = useDispatch();

    // to prevent _.debounce being fired from every time when the input value's state
    const debounce = useCallback(
        _.debounce((text: string) => {
        dispatch(setSearchBarText(text));
        }, 1000),
        []
    );

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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        debounce(e.target.value);
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
