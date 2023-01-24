import Bookmark from '../Components/Bookmark';

const Recommended=({movieList})=>{
    console.log(movieList);
    if(movieList.length > 0){
        const recommendData=movieList.filter(movie=>movie.isTrending===false);
        const recommendedMovies=recommendData.map(movie=>{
            return(                
                <div key={movie.title} className="card">
                    <p className="card-title">{movie.title}</p>
                    <img src={movie.thumbnail.regular.small} className="card-image" alt="movie-pic" />
                    <Bookmark movie={movie} />
                </div>
            )
        })
    
        if(recommendedMovies.length > 0){
            return(         
                <div className="pageContainer">
                    <h2 className="sectionHeading">Recommended For You</h2>
                    <div className="pageGrid">
                        {recommendedMovies}
                    </div>                    
                </div>
            )
        }
        
    }  
}

export default Recommended;