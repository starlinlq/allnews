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

export const getNewsData = () => async (dispatch: Dispatch < Action > ) => {
    let url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
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