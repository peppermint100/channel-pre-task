import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AddCountryForm from "./components/AddCountryForm";
import CountryList from "./components/CountryList";
import OrderCaseControlBar from "./components/OrderCaseControlBar";
import SearchBar from "./components/SearchBar";
import GlobalStyle from "./GlobalStyle";
import { setModalState } from "./redux/actions/ModalActions";

const App:React.FC = () => {

    const dispatch = useDispatch();

    return(
        <div id="app">
            <GlobalStyle />
            <Header>Channel Co. Pre Task</Header>
            <Main>
                <AddCountryForm />
                <SearchBar />
                <OrderCaseControlBar />
                <AddCountryFormShowButton onClick={() => {
                    dispatch(setModalState(true));
                }}>ADD COUNTRY</AddCountryFormShowButton>
                <CountryList />
            </Main>
        </div>
    )
}

const Header = styled.header`
    text-align: center;
    font-size: 32px;
    margin: 30px 0;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddCountryFormShowButton = styled.button`
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

export default App;