import React from 'react'
import { Field, Formik } from "formik";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CountryDataType from '../types/CountryDataType';
import { addCountryData } from '../redux/actions/FilteredCountryActions';
import { RootReducerType } from '../redux/reducers/RootReducer';
import { setModalState } from '../redux/actions/ModalActions';

const AddCountryForm:React.FC = () => {

    const dispatch = useDispatch();
    const filteredCountryData: Array<CountryDataType> = useSelector((state: RootReducerType) => state.FilteredCountryReducer);
    const isShowing = useSelector((state: RootReducerType) => state.ModalReducer);

    if(!isShowing){
        return null;
    }else{
    return (
        <Container>
            <Formik initialValues={{name: "", alpha2Code: "", callingCodes: "", capital: "", region: "" }} onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);
                setModalState(false);
                const { name, alpha2Code, callingCodes, capital, region } = data;
                let hasAlready = false;
                if(!name || !alpha2Code || !callingCodes || !capital || !region){
                    window.alert("Fill all blanks");
                    setSubmitting(false);
                    return;
                }

                filteredCountryData.filter(( country ) => {
                    if(country.alpha2Code === alpha2Code){
                        hasAlready = true;
                        return;
                    }
                })

                if(hasAlready){
                    window.alert(`There's already same alpha code as named ${alpha2Code}`);
                    setSubmitting(false);
                    return;
                }

                const callingCodesArr = [];
                callingCodesArr.push(callingCodes);

                const countryToAdd: CountryDataType = { name, alpha2Code, callingCodes: callingCodesArr, capital, region};  

                dispatch(addCountryData(countryToAdd));

                setSubmitting(false);
            }}>
                {
                    ({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <FormContainer onSubmit={handleSubmit}>
                        <Label htmlFor="name">Name</Label>
                        <Field
                            component={TextInput}
                            id= "name"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <Label htmlFor="alpha2Code">Alpha Code</Label>
                        <Field
                            component={TextInput}
                            id= "alpha2Code"
                            name="alpha2Code"
                            type="text"
                            value={values.alpha2Code}
                            onChange={handleChange}
                        />
                        <Label htmlFor="callingCodes">Calling Code</Label>
                        <Field
                            component={TextInput}
                            id= "callingCodes"
                            name="callingCodes"
                            type="text"
                            value={values.callingCodes}
                            onChange={handleChange}
                        />
                        <Label htmlFor="capital">Capital</Label>
                        <Field
                            component={TextInput}
                            id="capital"
                            name="capital"
                            type="text"
                            value={values.capital}
                            onChange={handleChange}
                        />
                        <Label htmlFor="region">Region</Label>
                        <Field
                            component={TextInput}
                            id="region"
                            name="region"
                            type="text"
                            value={values.region}
                            onChange={handleChange}
                        />
                        <AddButton type="submit" disabled={isSubmitting}>ADD COUNTRY</AddButton>
                    </FormContainer>
                    ) 
                }
                
            </Formik>
        </Container>
        )
    }
}

const Container = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 15%;
    border: 2px solid #e67e22;
    border-radius: 10px;
    background-color: #fff;
    z-index: 100;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddButton = styled.button`
    width: 250px;
    height: 50px;
    background-color: #e67e22;
    margin-top: 20px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
`

const TextInput = styled.input`
    width: 300px;
    height: 35px;
    border: 2px solid #e67e22;
    border-radius: 3px;
    margin: 20px;
`

const Label = styled.label`
    color: #e67e22;
    align-self: flex-start;
    transform: translate(50px, 15px);
`


export default AddCountryForm
