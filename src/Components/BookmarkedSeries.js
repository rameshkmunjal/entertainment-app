import {useState} from 'react';

const BookmarkedSeries=({seriesList, bookmarkHandler})=>{
    const [nilBookmark, setNilBookmark]=useState(true);
    function clickHandler(m){
        setNilBookmark(!nilBookmark);
        bookmarkHandler(m);
    }
    if(seriesList.length > 0){ 
            const retrievedSeries=seriesList.map(series=>{                
                return(
                    <div key={series.title} className="card">
                        <p className="card-title">{series.title}</p>
                        <img src={series.thumbnail.regular.small} className="card-image" alt="series-pic" />
                        
                        <div className="bookmarkIconDiv bookmarked" onClick={()=>clickHandler(series)}>
                            <img 
                                className="bookmarkIcon" 
                                src="../entertainment-app/assets/icon-bookmark-full.svg" 
                                alt="bookmark-icon" 
                            />                
                        </div>                                               
                    </div>
                )
            })

            if(seriesList){
                return(                
                <>
                    <h2 className='sectionHeading'>Bookmarked TV Series</h2>
                    <div className="homePageContainer">{retrievedSeries}</div>
                </>
                )
            }
        }   
            

}

export default BookmarkedSeries;