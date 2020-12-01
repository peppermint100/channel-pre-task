import React from 'react'
import styled from 'styled-components'
import { Field, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { RootReducerType } from '../redux/reducers/RootReducer';

const SearchBar = () => {
    const dispatch = useDispatch();
    const filteredSearchText = useSelector((state: RootReducerType) => state.FilteredSearchTextReducer);

    return (
        <div>
            <TextInput />
            <Formik initialValues={{ searchText: "" }} onSubmit={( data, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitting(false);
            }}>
                <Field
                    component={TextInput}
                    name="searchText"
                    type="text"
                    onChange={(e:any) => {
                        
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
