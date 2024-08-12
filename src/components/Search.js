import {useState} from "react";

function Search({searchText, setSearchText}){

    function handleChange(event){
        setSearchText(event.target.value)
    }

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={handleChange}
                value={searchText}
            />
        </div>
    )
}

export default Search;