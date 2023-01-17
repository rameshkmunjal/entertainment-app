import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';
import Bookmark from '../Components/Bookmark';

const MoviesScreen=()=>{
    const placeholderText='Search for Movies';
    const dispatch=useDispatch();
    const movieData = useSelector((state) => state.movieList);    
    const movieList=movieData.movies;
    console.log(movieList);
    

    useEffect(()=>{
        dispatch({type:'MOVIE_LIST_SUCCESS', payload:movieList});
    }, [dispatch, movieList]);

    function toggleBookmark(movie){        
        movieList.forEach(m=>{            
            if(m.title===movie.title){
                console.log(m);
                console.log(movie);
                m.isBookmarked = movie.isBookmarked;
                console.log(m.isBookmarked);
            }
        })
    }

    if(movieList.length > 0){
        const moviesArr=movieList.filter(movie=>movie.category==='Movie');

        if(moviesArr.length > 0){
            console.log(moviesArr.length);
            const retrievedSeries=moviesArr.map(item=>{
                console.log("trending : " , item);
                return(
                    <div key={item.title} className="card">
                        <p className="card-title">{item.title}</p>
                        <img src={item.thumbnail.regular.small} className="card-image" alt="movie-pic" />
                        <Bookmark movie={item} bookmarkClickHandler={toggleBookmark}/>                         
                    </div>
                )
            })

            if(retrievedSeries){
                return(         
                    <main>
                        <Search placeholderText={placeholderText} />
                        <h2 className="sectionHeading">Movies</h2>
                        <div className="homePageContainer">
                            {retrievedSeries}
                        </div>                    
                    </main>
                )
            }        
        }   
    }
}

export default MoviesScreen;