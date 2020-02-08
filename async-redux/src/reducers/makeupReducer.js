import {FETCH_DATA, UPDATE_MAKEUP ,SET_ERROR} from '../actions/index.js';

export const initialState = {
    makeup:[], 
    isFetchingData: false,
    error: ""
};
export const makeupReducer =( state =initialState, action)=>{
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state, isFetchingData:true
            };
         case UPDATE_MAKEUP:
             return {
                ...state,
                makeup:action.payload,
                isFetchingData: false
             };
             case SET_ERROR:
                 return {
                     ...state,
                     isFetchingData:false,
                     error: action.payload
                 }
        default :
            return state;
    };
}