import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Search from '../Components/Search';
import Bookmark from '../Components/Bookmark';

const SeriesScreen=()=>{
    const placeholderText='Search for Trending TV Series';
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
        const seriesData=movieList.filter(movie=>movie.category==='TV Series');
        if(seriesData.length > 0){
            console.log(seriesData.length);
            const retrievedSeries=seriesData.map(series=>{
                console.log("trending : " , series);
                return(
                    <div key={series.title} className="card">
                        <p className="card-title">{series.title}</p>
                        <img src={series.thumbnail.regular.small} className="card-image" alt="series-pic" />
                        <Bookmark movie={series} clickHandler={toggleBookmark}/>                        
                    </div>
                )
            })

            if(retrievedSeries){
                return(         
                    <main>
                        <Search placeholderText={placeholderText} />
                        <h2 className="sectionHeading">TV Series</h2>
                        <div className="homePageContainer">
                            {retrievedSeries}
                        </div>                    
                    </main>
                )
            }        
        }   
    }
}

export default SeriesScreen;