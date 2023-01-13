
export const movieListReducer=(state={movies:[]}, action)=>{
    //console.log(action.payload);
    switch(action.type){
        case 'MOVIE_LIST_REQUEST':
            return {loading:true, movies:[]}
        case 'MOVIE_LIST_SUCCESS':
            //console.log(action.payload);
            return {
                loading:false, 
                movies:action.payload
            }
        case 'MOVIE_LIST_FAIL':
            return {loading:false, error:action.payload}
        default:
            return state
    }    
}