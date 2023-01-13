import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';
import Bookmark from '../Components/Bookmark';

const TrendingScreen=()=>{
    const placeholderText='Search for Trending Movies/Series';
    const movieData = useSelector((state) => state.movieList);    
    const movieList=movieData.movies;
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch({type:'MOVIE_LIST_SUCCESS', payload:movieList});
    }, [dispatch, movieList]);

    function toggleBookmark(movie){        
        movieList.forEach(m=>{            
            if(m.title===movie.title){
                console.log(m);
                console.log(movie);
                m.isBookmarked = !movie.isBookmarked;
                console.log(m.isBookmarked);
            }
        })
    }

    if(movieList.length > 0){
        const trendingData=movieList.filter(movie=>movie.isTrending===true);
        if(trendingData.length > 0){
            console.log(trendingData.length);
            const retrievedMovies=trendingData.map(movie=>{
                console.log("trending : " , movie);
                return(
                    <div key={movie.title} className="card">
                        <p className="card-title">{movie.title}</p>
                        <img src={movie.thumbnail.regular.small} className="card-image" alt="movie-pic" />
                        <Bookmark movie={movie} clickHandler={toggleBookmark}/> 
                        
                    </div>
                )
            })

            if(movieList){
                return(         
                    <main>
                        <Search placeholderText={placeholderText} />
                        <div className="homePageContainer">
                            {retrievedMovies}
                        </div>                    
                    </main>
                )
            }        
        }   
    }
}

export default TrendingScreen;