import {GET_DATA} from '../actions/index.js';

export const initialState = {
    makeup:[], 
    isFetchingData: false
};
export const makeupReducer =( state =initialState, action)=>{
    switch(action.type){
        case GET_DATA:
            return {
                ...state, isFetchingData:true
            };
        default :
            return state;
    };
}