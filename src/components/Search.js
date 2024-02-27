function Search({searchText, updateSearchText}){
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={searchText}
                onChange={updateSearchText}
            />
        </div>
    )
}

export default Search;