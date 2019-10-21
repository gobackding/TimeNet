import { createAction } from "redux-actions";
import { Find_News_value, TicketPurchase_List_Value, FIND_LIST_VALUE, FIND_FilmReview_Value, FIND_RankingList_Value
,Find_Trailer_Value
} from "@api/movie.js";






const NEWS_VALUE = createAction("new_action_value", data => data)
export const NEWS_ACTION_VALUE = () => {
    return async (dispatch) => {
        let data = await Find_News_value()
        dispatch(NEWS_VALUE(data))
    }
}

const TicketPurchase_LISTValue = createAction("TicketPurchase_value_List", data => data)
export const TicketPurchase_LIST = () => {
    return async (dispatch) => {
        if (!sessionStorage.getItem("cityId")) {
            let cityId = 290
            let data = await TicketPurchase_List_Value(cityId)
            dispatch(TicketPurchase_LISTValue(data))

        } else {
            let cityId = JSON.parse(sessionStorage.getItem("cityId"))

            let data = await TicketPurchase_List_Value(cityId)

            dispatch(TicketPurchase_LISTValue(data))
        }

    }
}
// 这个是城市列表页面的数据
const CITYLIST_VALUE = createAction("city_list_value", data => data)
export const CityListValue = (val) => {
    return async (dispatch) => {
        let data = await val
        dispatch(CITYLIST_VALUE(data))

    }
}

// Find News页面的数据
const FIND_NEWS_VALUE_DISPATCH = createAction("find_news_list", data => data)
export const FIND_NEWS_VALUE = () => {
    return async (dispatch) => {
        let data = await FIND_LIST_VALUE()
        dispatch(FIND_NEWS_VALUE_DISPATCH(data.newsList))
    }
}

// Find FilmReview  预告片页面
const FIND_FILMREVIEW_STYLE = createAction("Find_FilmReview_list", data => data)
export const Find_FilmReview = () => {
    return async (dispatch) => {
        let data = await FIND_FilmReview_Value()
        dispatch(FIND_FILMREVIEW_STYLE(data.trailers))
    }
}
// 排行榜页面
const FIND_RANKINGLIST_STYLE=createAction("Find_RankingList_list",data=>data)
export const Find_RankingList = () => {
    return async (dispatch) => {
        let data = await FIND_RankingList_Value()
        dispatch(FIND_RANKINGLIST_STYLE(data.topLists))
    }
}
// 影评页面
const FIND_TRAILER_STYLE=createAction("Find_Trailer_List_value",data=>data)
export const Find_Trailer_List= () =>{
    return async (dispatch)=>{
        let data = await Find_Trailer_Value()
        dispatch(FIND_TRAILER_STYLE(data))
    }
}