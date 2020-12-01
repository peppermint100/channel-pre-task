import React from "react";
import CountryList from "./components/CountryList";
import SearchBar from "./components/SearchBar";
import GlobalStyle from "./GlobalStyle";

const App:React.FC = () => {

    return(
        <div id="app">
            <GlobalStyle />
            <SearchBar />
            <CountryList />
        </div>
    )
}

export default App;