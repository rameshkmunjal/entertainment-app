import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';
import SearchPage from '../Components/SearchPage';
import Page from '../Components/Page';
import Bookmark from '../Components/Bookmark';

const MoviesScreen=()=>{
    const baseURL=window.location.origin +'/entertainment-app';
    const [searchObj, setSearchObj]=useState({});
    const [searchPage, setSearchPage]=useState(false);
    const placeholderText='Search for Movies';
    const dispatch=useDispatch();
    const movieData = useSelector((state) => state.movieList);    
    const movieList=movieData.movies;
    console.log(movieList);

    if(movieList.length > 0){
        
    }
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
                    movieList={movieList}
                />
                <SearchPage searchObj={searchObj} />
            </main>
        )
    } else {
        const moviesArr=movieList.filter(movie=>movie.category==='Movie');
        const retrievedMovies=moviesArr.map(item=>{
            return(
                    <div key={item.title} className="card">
                        <p className="card-title">{item.title}</p>
                        <img src={baseURL + item.thumbnail.regular.small} className="card-image" alt="movie-pic" />
                        <Bookmark movie={item} bookmarkClickHandler={toggleBookmark}/>                         
                    </div>
                )
        })
        return(
            <main>
                    <Search
                        placeholderText={placeholderText} 
                        searchHandler={handleSearch}
                        movieList={movieList}
                    />                    
                    <Page results={retrievedMovies} heading={"Movies"}/>                   
            </main>
        )
    }

} //component ended


export default MoviesScreen;