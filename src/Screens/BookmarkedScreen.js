import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';

import BookmarkedMovies from '../Components/BookmarkedMovies';
import BookmarkedSeries from '../Components/BookmarkedSeries';

const BookmarkedScreen=()=>{
    const placeholderText='Search for Bookmarked Movies/Series';
    const movieData = useSelector((state) => state.movieList);
    const allList=movieData.movies;
    const [movies, setMovies]=useState(allList.filter(movie=>movie.isBookmarked===true && movie.category==='Movie'));    
    const [series, setSeries]=useState(allList.filter(s=>s.isBookmarked===true && s.category==='TV Series'));    
    const dispatch=useDispatch();

    

    function undoBookmarkMovie(movie){       
        movies.forEach(m=>{            
            if(m.title===movie.title){
                m.isBookmarked = false;
                m=movie;
            }            
        })  
        const allMovies=movies.filter(movie=>movie.isBookmarked===true && movie.category==='Movie');
        setMovies(allMovies);
        const allData=[...allMovies, ...series];
        dispatch({type:'MOVIE_LIST_SUCCESS', payload:allData});            
    }

    function undoBookmarkSeries(clickedSeries){      
        series.forEach(s=>{            
            if(s.title===clickedSeries.title){
                s.isBookmarked = false;
                s=series;
            }            
        })  
        const allSeries=series.filter(ser=>ser.isBookmarked===true && ser.category==='TV Series');
        setSeries(allSeries);
        const allData=[...movies, ...allSeries];
        dispatch({type:'MOVIE_LIST_SUCCESS', payload:allData});            
    }

    return(
        <main>
            <Search placeholderText={placeholderText} />
            <BookmarkedMovies movieList={movies} bookmarkHandler={undoBookmarkMovie} />
            <BookmarkedSeries seriesList={series} bookmarkHandler={undoBookmarkSeries} />
        </main>        
    )        
}



export default BookmarkedScreen;