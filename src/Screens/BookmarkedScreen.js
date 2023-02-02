import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';
import SearchPage from '../Components/SearchPage';
import BookmarkedMovies from '../Components/BookmarkedMovies';
import BookmarkedSeries from '../Components/BookmarkedSeries';

const BookmarkedScreen=()=>{
    console.log(window.location.origin);
    const baseURL=window.location.origin +'/entertainment-app';
    const [searchObj, setSearchObj]=useState({});
    const [searchPage, setSearchPage]=useState(false);
    const placeholderText='Search for Bookmarked Movies/Series';
    const movieData = useSelector((state) => state.movieList);
    const allList=movieData.movies;
    const [movies, setMovies]=useState(allList.filter(movie=>movie.isBookmarked===true && movie.category==='Movie'));    
    const [series, setSeries]=useState(allList.filter(s=>s.isBookmarked===true && s.category==='TV Series'));    
    const arr=[...movies, ...series];
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

    function handleSearch(obj){
        setSearchPage(obj.page);
        setSearchObj(obj);
    }
    
    if(searchPage){
        console.log(searchObj);
        return(
            <main>
                <Search
                    placeholderText={placeholderText} 
                    searchHandler={handleSearch}
                    movieList={arr}
                />
                <SearchPage searchObj={searchObj} />
            </main>
        )
    } else {        
        return(
            <main>
                    <Search
                        placeholderText={placeholderText} 
                        searchHandler={handleSearch}
                        movieList={arr}
                    />                    
                    <BookmarkedMovies baseURL={baseURL} movieList={movies} bookmarkHandler={undoBookmarkMovie} />
                    <BookmarkedSeries baseURL={baseURL} seriesList={series} bookmarkHandler={undoBookmarkSeries} />                  
            </main>
        )
    }            
}



export default BookmarkedScreen;