import {
    Dispatch
} from "redux"
import {
    Action
} from "../actions"
import {
    ActionType
} from "../action-types"
import axios from "axios";

export const getNewsData = () => async (dispatch: Dispatch < Action >, getState: any ) => {
    const {newsData} = getState();
    let url = 'http://newsapi.org/v2/top-headlines?' +
        `country=${newsData.currentCountry}&` +
        'apiKey=52f781dceb684ccda628b98b8e9276c6';
    dispatch({
        type: ActionType.GET_NEWS
    })

    try {

        const {
            data
        } = await axios.get(url);
        dispatch({
            type: ActionType.GET_NEWS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ActionType.GET_NEWS_ERROR,
            payload: error.message
        })

    }

}

export const getSpecificNewsByCountry = (term: String) => async (dispatch:Dispatch<Action>) =>{
    let url = 'http://newsapi.org/v2/top-headlines?' +
    `country=${term}&` +
    'apiKey=52f781dceb684ccda628b98b8e9276c6';
    dispatch({type:ActionType.GET_NEWS})
    try {
        const {data} = await axios.get(url);
        dispatch({type:ActionType.GET_NEWS_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type:ActionType.GET_NEWS_ERROR, payload: error.message})
        
    }
}

export const getSpecificNewsbySearch = (term: string) => async (dispatch: Dispatch<Action>, getState: any) =>{
    const {newsData} = getState();
  let url = `https://newsapi.org/v2/top-headlines?country=${newsData.currentCountry}&q=${term}&apiKey=52f781dceb684ccda628b98b8e9276c6`
  dispatch({type:ActionType.GET_NEWS})
    try{
        const {data} = await axios.get(url);
        dispatch({type:ActionType.GET_NEWS_SUCCESS, payload: data})

    } catch(error){
        dispatch({type: ActionType.GET_NEWS_ERROR, payload: error.message})

    }

}

export const getSpecificNewsByCategory = (term:string) => async (dispatch: Dispatch<Action>, getState: any) =>{
    const {newsData} = getState();
    dispatch({type:ActionType.GET_NEWS})
    
   let url = `https://newsapi.org/v2/top-headlines?country=${newsData.currentCountry}&category=${term}&apiKey=52f781dceb684ccda628b98b8e9276c6`
    try {
        const {data} = await axios.get(url);
        dispatch({type:ActionType.GET_NEWS_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type:ActionType.GET_NEWS_ERROR, payload: error.message})
        
    }

} 

export const setTheme  = () => (dispatch: Dispatch<Action>, getState: any) =>{

   const {newsData} = getState();
   dispatch({type: ActionType.SET_THEME, payload: !newsData.theme})
}