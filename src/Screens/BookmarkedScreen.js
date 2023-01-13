import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';
import Bookmark from '../Components/Bookmark';

const BookmarkedScreen=()=>{
    const placeholderText='Search for Bookmarked Movies/Series';
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
        const bookmarkedData=movieList.filter(movie=>movie.isBookmarked===true);
        if(bookmarkedData.length > 0){
            console.log(bookmarkedData.length);
            const retrievedMovies=bookmarkedData.map(movie=>{
                console.log("Bookmarked : " , movie);
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



export default BookmarkedScreen;