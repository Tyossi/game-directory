import React from 'react';
import "./SearchBar.css"


const SearchBar = ({searchField, setSearchField}) => {

    const setSearchInputToState = (e) => {
        const value = e.target.value
        setSearchField(value)
        console.log(searchField)
    }

    return (
        <div className="searchBar__container">
            <input className="searchBar" onChange={setSearchInputToState}type="search" placeholder="search"></input>
        </div>
    )
}


export default SearchBar