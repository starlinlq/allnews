
import {ActionType} from "../action-types"

interface GetNewsAction{
    type: ActionType.GET_NEWS_SUCCESS,
    payload: {articles: [], status: string, totalResults: number},
}

interface GetNewsErrorAction{
    type: ActionType.GET_NEWS_ERROR;
    payload: string;
}

interface SearchAction {
    type: ActionType.SEARCH_SUCCESS;
    payload: {};
}

interface SearchErrorAction {
    type: ActionType.SEARCH_ERROR;
    payload: string
}

interface GetNews{
    type: ActionType.GET_NEWS;
}

interface SpecificNews{
    type: ActionType.GET_SPECIFIC_COUNTRY_SUCCESS,
    payload: string;
}

export type Action = SearchAction | SearchErrorAction | GetNewsAction | GetNewsErrorAction | GetNews | SpecificNews;