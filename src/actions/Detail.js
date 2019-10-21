import { createAction } from "redux-actions";
import { Detail_List_Value, Ranking_List_Detail } from "@api/movie.js";

let Value = JSON.parse(sessionStorage.getItem("Value")) || '';

// 点击获取的影院id
export const CINMA_ID = (val) => {
    return (dispatch) => {
        Value = val
        sessionStorage.setItem('Value', JSON.stringify(Value))
        console.log(Value, val)
    }
}
// detail 的数据
const DETAIL_VALUE = createAction("detail_action_value", data => data)
export const DETAIL_LIST = () => {
    return async (dispatch) => {
        let data = await Detail_List_Value(Value)
        dispatch(DETAIL_VALUE(data.data))
    }
}


// Banner切换的时候 当前图片的下标
const Banner_Index_Value = createAction("banner_list_value", data => data)
export const Banner_Index = (val) => {
    return (dispatch) => {
        let data = val
        dispatch(Banner_Index_Value(data))
    }
}
// movieId
const Movie_Id_Value = createAction("movie_id_value", data => data)
export const MOVIE_ID = (val) => {
    return (dispatch) => {
        dispatch(Movie_Id_Value(val))
    }
}

// 排行榜  详情
const Ranking_Value = createAction("ranking_list_value",data=>data)
export const Ranking_List_Value = (val) => {
    return async (dispatch) => {
        let data = await Ranking_List_Detail(val)
        dispatch(Ranking_Value(data))
        return true
    }
}