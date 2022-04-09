import { ADD_MOVIES, REMOVE_FROM_FAVOURITES, ADD_TO_FAVOURITES, SHOW_ALL_MOVIES, SHOW_FAVOURITE_MOVIES  } from "../actions";


const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMovieState,action){
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(movie => 
                movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites: filteredArray
            }
        case SHOW_ALL_MOVIES:
            return{
                ...state,
                showFavourites: false
            }
        case SHOW_FAVOURITE_MOVIES:
            return{
                ...state,
                showFavourites: true
            }
        default:
            return state;
    }
} 

const initialSearchState = {result: {} };

export function search(state = initialSearchState, action){
    return state;
}

const initialRootState = {
    movies: initialMovieState,
    search: initialSearchState
}

export default function rootReducer(state = initialRootState, action){
    return {
        movies: movies(state.movies,action),
        search: search(state.search,action)
    }
}