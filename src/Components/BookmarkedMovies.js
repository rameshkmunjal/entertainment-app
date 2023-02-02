import {useState} from 'react';

const BookmarkedMovies=({movieList, bookmarkHandler, baseURL})=>{
    const [nilBookmark, setNilBookmark]=useState(true);
    function clickHandler(m){
        setNilBookmark(!nilBookmark);
        bookmarkHandler(m);
    }
    
    if(movieList.length > 0){        
            const retrievedMovies=movieList.map(movie=>{
                return(
                    <div key={movie.title} className="card">
                        <p className="card-title">{movie.title}</p>
                        <img src={baseURL + movie.thumbnail.regular.small} className="card-image" alt="movie-pic" />
                        <div className="bookmarkIconDiv bookmarked" onClick={()=>clickHandler(movie)}>
                            <img 
                                className="bookmarkIcon" 
                                src={baseURL +'/assets/icon-bookmark-full.svg' }
                                alt="bookmark-icon" 
                            />                
                        </div>                     
                    </div>
                )
            })

            if(movieList){
                return(                    
                    <div className="pageContainer">
                        <h2 className='sectionHeading'>Bookmarked Movies</h2>
                        <div className="pageGrid">{retrievedMovies}</div>
                    </div>
                )
            }
        }   
    

}

export default BookmarkedMovies;