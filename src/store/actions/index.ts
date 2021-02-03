
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

export type Action = SearchAction | SearchErrorAction | GetNewsAction | GetNewsErrorAction | GetNews;