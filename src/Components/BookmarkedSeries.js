import {useState} from 'react';

const BookmarkedSeries=({seriesList, bookmarkHandler, baseURL})=>{
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
                        <img src={baseURL + series.thumbnail.regular.small} className="card-image" alt="series-pic" />
                        
                        <div className="bookmarkIconDiv bookmarked" onClick={()=>clickHandler(series)}>
                            <img 
                                className="bookmarkIcon" 
                                src={baseURL +'/assets/icon-bookmark-full.svg' }
                                alt="bookmark-icon" 
                            />                
                        </div>                                               
                    </div>
                )
            })

            if(seriesList){
                return(                
                <div className="pageContainer">
                    <h2 className='sectionHeading'>Bookmarked TV Series</h2>
                    <div className="pageGrid">{retrievedSeries}</div>
                </div>
                )
            }
        }   
            

}

export default BookmarkedSeries;