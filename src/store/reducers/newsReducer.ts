import {ActionType} from "../action-types"
import {Action} from "../actions"
interface State{
    loading: false | true;
    data: {articles: { publishedAt: string, url: string, urlToImage: string, source: {id: null | string, name: string | null},title:string, author: string | null, description: string, content: string | null}[], status: string | null, totalResults: number | null};
    error: string | null;
    searchData: {}
    currentCountry: string
}

const initialState = {
    loading: false,
    data: {articles: [], status: "", totalResults: null},
    error: null,
    searchData: {},
    currentCountry: "us",
}


const newsReducer = (state: State = initialState, action: Action): State =>{
    switch (action.type) {
        case ActionType.GET_NEWS: 
        return {...state,loading: true, data: {articles: [], status: "", totalResults: null}, error: null, searchData: {}}
        case ActionType.GET_NEWS_SUCCESS:
            return {...state,loading: false, data: {articles: action.payload.articles, status: action.payload.status, totalResults: action.payload.totalResults } , error: null, }
        case ActionType.GET_NEWS_ERROR:
            return{...state, loading: false, error: action.payload, }
        case ActionType.SEARCH_ERROR:
            return {...state, loading: false, error: action.payload, }
        case ActionType.SEARCH_SUCCESS: 
        return {...state, loading: false,  error: null, searchData: action.payload}
        case ActionType.GET_SPECIFIC_COUNTRY_SUCCESS:
            return {...state, loading: false, error: null, currentCountry: action.payload }
         

        default:
            return state;
    }
  
}


export default newsReducer;