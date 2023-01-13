

const Bookmark=({movie, clickHandler})=>{
    console.log(movie);
    return(
        movie.isBookmarked ? (
            <div className="bookmarkIconDiv bookmarked" onClick={()=>clickHandler(movie)}>
            <img 
                className="bookmarkIcon" 
                src="../assets/icon-bookmark-full.svg" 
                alt="bookmark-icon" 
            />                
            </div>
        ) : (
            <div className="bookmarkIconDiv notBookmarked" onClick={()=>clickHandler(movie)}>
            <img 
                className="bookmarkIcon" 
                src="../assets/icon-bookmark-empty.svg" 
                alt="bookmark-icon" 
            />                
            </div>
        )
    )
}


export default Bookmark;