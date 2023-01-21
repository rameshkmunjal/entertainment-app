import Bookmark from '../Components/Bookmark';

const Recommended=({movieList})=>{
    if(movieList.length > 0){
        const trendingData=movieList.filter(movie=>movie.isTrending===false);
        const trendingMovies=trendingData.map(movie=>{
            return(
                <div key={movie.title} className="card">
                    <p className="card-title">{movie.title}</p>
                    <img src={movie.thumbnail.regular.small} className="card-image" alt="movie-pic" />
                    <Bookmark movie={movie} />
                </div>
            )
        })
    
        if(trendingMovies.length > 0){
            return(         
                <div className="pageContainer">
                    <h2 className="sectionHeading">Recommended For You</h2>
                    <div className="pageGrid">
                        {trendingMovies}
                    </div>                    
                </div>
            )
        }
        
    }  
}

export default Recommended;