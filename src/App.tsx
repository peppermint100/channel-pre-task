import React from "react";
import styled from "styled-components";
import CountryList from "./components/CountryList";
import OrderCaseControlBar from "./components/OrderCaseControlBar";
import SearchBar from "./components/SearchBar";
import GlobalStyle from "./GlobalStyle";

const App:React.FC = () => {

    return(
        <div id="app">
            <GlobalStyle />
            <Header>Channel Co. Pre Task</Header>
            <Main>
                <SearchBar />
                <OrderCaseControlBar />
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

export default App;