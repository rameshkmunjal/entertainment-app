import DB from '../db/data.json';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Trending from '../Components/Trending';
import Recommended from '../Components/Recommended';
import Search from '../Components/Search';
import SearchPage from '../Components/SearchPage';

const HomeScreen=()=>{   
    const [searchObj, setSearchObj]=useState({});
    const [searchPage, setSearchPage]=useState(false);
    const movieData = useSelector((state) => state.movieList); 
    const movieList=movieData.movies;
    const placeholderText='Search for Movies or TV Series';
    const dispatch=useDispatch();   

    useEffect(()=>{
        dispatch({type:'MOVIE_LIST_SUCCESS', payload:DB.data});
    }, [dispatch]);

    function handleSearch(obj){ 
        console.log(obj);
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
        return(
            <main>
                <Search
                    placeholderText={placeholderText} 
                    searchHandler={handleSearch}
                    movieList={movieList}
                />                    
                <Trending />
                <Recommended movieList={movieList} />                   
            </main>
        )
    }
}

export default HomeScreen;