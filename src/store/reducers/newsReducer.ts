import {ActionType} from "../action-types"
import {Action} from "../actions"
interface State{
    loading: false | true;
    data: {};
    error: string | null;
    searchData: {}
}

const initialState = {
    loading: false,
    data: {},
    error: null,
    searchData: {}
}


const newsReducer = (state: State = initialState, action: Action): State =>{
    switch (action.type) {
        case ActionType.GET_NEWS: 
        return {loading: true, data: {}, error: null, searchData: {}}
        case ActionType.GET_NEWS_SUCCESS:
            return {...state,loading: false, data: action.payload , error: null, }
        case ActionType.GET_NEWS_ERROR:
            return{...state, loading: false, data: {}, error: action.payload, }
        case ActionType.SEARCH_ERROR:
            return {...state, loading: false, error: action.payload, }
        case ActionType.SEARCH_SUCCESS: 
        return {...state, loading: false,  error: null, searchData: action.payload}
         

        default:
            return state;
    }
  
}


export default newsReducer;