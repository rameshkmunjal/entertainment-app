import {useState} from 'react';

const Search=({placeholderText, searchHandler, movieList})=>{    
    const [searchObj, setSearchObj]=useState({});

    const handleKeyDown = (event) => {      
        let results=[];
        if (event.key === 'Enter') {         
            let searchText=event.target.value.toLowerCase();
            //console.log(searchText. searchText.length);
            if(searchText.length > 0){
               results=movieList.filter(item=>item.title.toLowerCase().includes(searchText)); 
               if(results.length > 0){
                    setSearchObj({page:true, success:true, results:results, message:null});           
                } else {                    
                    setSearchObj({page:true, success:false, results:null, message:`No match found for input -"${searchText}"`});
                }                                      
            } else {
                setSearchObj({page:false, success:false, results:null, message:null}); 
            }
                
            
                searchHandler(searchObj);  
        }                       
    }

    return(
        <div className="searchInputContainer">
            <img className="searchImage" src="../entertainment-app/assets/icon-search.svg" alt="img-search" />
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