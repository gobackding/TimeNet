import { handleActions } from "redux-actions"

const defaultValue = {
    Detail_title: "",
    Detail_Banner: [],
    Detail_List_Value: [],
    BannerIndexValue: 0,
    Movie_Id: 0,
    RankingList_Detail_Value:JSON.parse(sessionStorage.getItem("RankingList_Detail_Value")) || []
}

export default handleActions({
    detail_action_value: (state, action) => {
        let Detail_List_Value = Object.assign({}, state)
        Detail_List_Value.Detail_title = action.payload.cinema.name
        Detail_List_Value.Detail_Banner = action.payload.movies
        Detail_List_Value.Detail_List_Value = action.payload.showtimes
        return Detail_List_Value;
    },
    banner_list_value: (state, action) => {
        let BannerIndexValue = Object.assign({}, state)
        BannerIndexValue.BannerIndexValue = action.payload

        return BannerIndexValue;
    },
    movie_id_value: (state, action) => {
        let Movie_Id = Object.assign({}, state)
        Movie_Id.Movie_Id = action.payload
        return Movie_Id
    },
    ranking_list_value: (state, action) => {
        let RankingList_Detail_Value = Object.assign({}, state)
        RankingList_Detail_Value.RankingList_Detail_Value = action.payload
        sessionStorage.setItem("RankingList_Detail_Value",JSON.stringify(action.payload))
        return RankingList_Detail_Value;
    }
}, defaultValue)