

const SearchPage=({searchObj})=>{
    console.log(searchObj);
    const baseURL=window.location.origin +'/entertainment-app';
    let {message, results, success}=searchObj;

    if(success){
        console.log(results);
        let retrievedResults=results.map(movie=>{
            return(
                <div key={movie.title} className="card">
                    <p className="card-title">{movie.title}</p>
                    <img src={baseURL + movie.thumbnail.regular.small} className="card-image" alt="movie-pic" />                    
                </div>
            )
        })

       return (            
            <div className="pageContainer">
                <h2 className="sectionHeading">Search Results</h2>
                <div className="pageGrid">{retrievedResults}</div>                
            </div> 
        )
    } else {
        return (
            <div className="pageContainer">
                <h2 className="sectionHeading">{message}</h2>                                    
            </div>
            )
    }
}

export default SearchPage;