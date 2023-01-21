import {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {motion} from 'framer-motion';
import Bookmark from './Bookmark';

const Trending=()=>{
    const carousel=useRef();
    const [width, setWidth]=useState(0);
    const movieData = useSelector((state) => state.movieList);    
    const movieList=movieData.movies;
    
    
    const dispatch=useDispatch();
    

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        dispatch({type:'MOVIE_LIST_SUCCESS', payload:movieList});
    }, [dispatch, movieList]);

    function toggleBookmark(movie){        
        movieList.forEach(m=>{            
            if(m.title===movie.title){
                m.isBookmarked = !movie.isBookmarked;
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
                    <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                        <motion.div 
                            className="image-carousel" 
                            drag="x" 
                            dragConstraints={{right:0, left:-width}}>
                            {trendingMovies}
                        </motion.div> 
                    </motion.div>                                       
                </div>
            )
        }
        
    }  
}

export default Trending;