import { ActionTypes } from "../actionTypes";

const initialState = {
    isLoading : false,
    error:null,
    genres:[],
}

const genreReducer = (state=initialState,action)=>{
//  console.log(action)
const {type,payload} =action

switch(type){
    case ActionTypes.GENRES_LOADING:
        return {...state,isLoading:false}

     case ActionTypes.GENRES_ERROR:
        return {...state,isLoading:false,error:payload}   
    
    case ActionTypes.GENRES_SUCCESS:
        // console.log(payload);
        return {...state,isLoading:false,error:null,genres:payload}

        default:
            return state;

}

};

export default genreReducer;