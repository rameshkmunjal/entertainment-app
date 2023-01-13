import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {movieListReducer} from './reducers/movieReducer';

const reducer=combineReducers({
    movieList:movieListReducer,    
});

const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
