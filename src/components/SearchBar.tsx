import React from 'react'
import styled from 'styled-components'

const SearchBar = () => {
    return (
        <div>
            <TextInput />
        </div>
    )
}

const TextInput = styled.input`
    border: 1px solid #bdc3c7;
    width: 400px;
    height: 50px;
`

export default SearchBar
