import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Trending from '../Components/Trending';
import Recommended from '../Components/Recommended';
import Search from '../Components/Search';
import DB from '../db/data.json';

const HomeScreen=()=>{
    const movieData = useSelector((state) => state.movieList); 
    const movieList=movieData.movies;
    const placeholderText='Search for Movies or TV Series';
    const dispatch=useDispatch();   

    useEffect(()=>{
        dispatch({type:'MOVIE_LIST_SUCCESS', payload:DB.data});
    }, [dispatch]);

    function handleSearch(term){        
        movieList.forEach(m=>{
            let movieTitle=m.title.toLowerCase();
            let searchText=term.toLowerCase();
            if(movieTitle.includes(searchText)){
                console.log(movieTitle + 'found');
            }
        })      
    }

    return(         
        <main>
            <Search placeholderText={placeholderText} searchHandler={handleSearch}/>
            <Trending />
            <Recommended movieList={movieList} />                   
        </main>
    )
     
}

export default HomeScreen;