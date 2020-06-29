import {GET_MOVIE_RECOMMENDATIONS} from "./index_actions";

const initialState = {
    recommendations:{},
}

const movies = (state=initialState, action)=>{
    switch(action.type){
        case GET_MOVIE_RECOMMENDATIONS:
            return{
                ...state, recommendations:{...action.payload}
            }
        default:
            return state;
    }
}

export default movies;