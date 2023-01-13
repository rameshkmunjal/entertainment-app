import Bookmark from '../Components/Bookmark';

const Recommended=({movieList})=>{
    console.log(movieList);
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
                <main>
                    <h2 className="sectionHeading">Recommended For You</h2>
                    <div className="homePageContainer">
                        {trendingMovies}
                    </div>                    
                </main>
            )
        }
        
    }  
}

export default Recommended;