import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';
import SearchPage from '../Components/SearchPage';
import Page from '../Components/Page';
import Bookmark from '../Components/Bookmark';

const SeriesScreen=()=>{
    const [searchObj, setSearchObj]=useState({});
    const [searchPage, setSearchPage]=useState(false);
    const placeholderText='Search for Trending TV Series';
    const movieData = useSelector((state) => state.movieList);    
    const movieList=movieData.movies;
    const seriesData=movieList.filter(movie=>movie.category==='TV Series');
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
        const retrievedSeries=seriesData.map(series=>{
            return(
                <div key={series.title} className="card">
                    <p className="card-title">{series.title}</p>
                    <img src={series.thumbnail.regular.small} className="card-image" alt="series-pic" />
                    <Bookmark movie={series} clickHandler={toggleBookmark}/>                        
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
                    <Page results={retrievedSeries} heading={"TV Series"}/>                   
            </main>
        )
    }

    
}

export default SeriesScreen;