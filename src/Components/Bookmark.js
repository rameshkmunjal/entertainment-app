import { click } from '@testing-library/user-event/dist/click';
import {useState} from 'react';

const Bookmark=({movie, bookmarkClickHandler})=>{
    const [bookmark, setBookmark]=useState(movie.isBookmarked);
    console.log(movie);
    const clickHandler=()=>{
        movie.isBookmarked=!bookmark;
        setBookmark(!bookmark);        
        bookmarkClickHandler(movie);
    }
    return(
        movie.isBookmarked ? (
            <div className="bookmarkIconDiv bookmarked" onClick={clickHandler}>
            <img 
                className="bookmarkIcon" 
                src="../entertainment-app/assets/icon-bookmark-full.svg" 
                alt="bookmark-icon" 
            />                
            </div>
        ) : (
            <div className="bookmarkIconDiv notBookmarked" onClick={clickHandler}>
            <img 
                className="bookmarkIcon" 
                src="../entertainment-app/assets/icon-bookmark-empty.svg" 
                alt="bookmark-icon" 
            />                
            </div>
        )
    )
}


export default Bookmark;