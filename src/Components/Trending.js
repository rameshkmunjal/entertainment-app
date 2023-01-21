import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Bookmark from './Bookmark';

const Trending=()=>{
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
        const trendingMovies=trendingData.map(movie=>{
            return(
                <div key={movie.title} className="card">
                    <p className="card-title">{movie.title}</p>
                    <img src={movie.thumbnail.regular.small} className="sliderImage" alt="movie-pic" />
                    <Bookmark movie={movie} clickHandler={toggleBookmark}/>
                </div>
            )
        })
    
        if(trendingMovies.length > 0){
            return(         
                <div className="trendingContainer">
                    <h2 className="sectionHeading">Trending</h2>
                    <div className="sliderDiv">
                        {trendingMovies}
                    </div>                    
                </div>
            )
        }
        
    }  
}

export default Trending;