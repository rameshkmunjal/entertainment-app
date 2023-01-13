
const Card=({cardItem})=>{
    return(
    <div key={cardcardItem.title} className="card">
        <p className="card-title">{cardItem.title}</p>
        <img src={cardItem.thumbnail.regular.small} className="card-image" alt="movie-pic" />
        <Bookmark movie={cardItem} clickHandler={toggleBookmark}/>  ``                        
    </div>
    );
}

export default Card;