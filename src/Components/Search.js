
const Search=({placeholderText, searchHandler})=>{
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
           searchHandler(event.target.value);
        }
      }; 
      
    
    return(
        <div className="searchInputContainer">
            <img className="searchImage" src="../assets/icon-search.svg" alt="img-search" />
            <input 
                className="searchInput" 
                type="text" 
                placeholder={placeholderText} 
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default Search;