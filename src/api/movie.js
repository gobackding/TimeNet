import http from "@utils/http.js";

export const Find_News_value = () => http.get("/api/proxy/ticket/Showtime/HotCitiesByCinema.api", {
    _: 1569830279970
})

export const TicketPurchase_List_Value = (locationId) => http.get("/api/proxy/ticket/onlineCinemasByCity.api", {
    locationId: locationId,
    _: 1569843212000
})

// Find_New
export const FIND_LIST_VALUE = () => http.get("/Service/callback.mi/News/NewsList.api", {
    t:20191028545940371,
    pageIndex:1
})
// Find FilmReview
export const FIND_FilmReview_Value = () => http.get("/Service/callback.mi/PageSubArea/TrailerList.api", {
    t:2019102926683542
})
// Find/RankingList  排行榜页面
export const FIND_RankingList_Value = () => http.get("/Service/callback.mi/TopList/TopListOfAll.api", {
    t:20191021013871995,
    pageIndex:1
})
// Find  影评
export const Find_Trailer_Value = () => http.get("/Service/callback.mi/MobileMovie/Review.api", {
    needTop:false,
    t:201910216362484551
})
// 搜索  默认出现的东西
export const Search_List_Value =()=>http.get("/Service/callback.mi/Search/HotKeyWords.api", {
    t:20191021720637303
})
// 详情  detail
export const Detail_List_Value =(cinemaId)=>http.get("/cinema/showtime.api", {
    t:201910511224351274,
    cinemaId:cinemaId
})
// 排行榜详情
export const Ranking_List_Detail =(toplistId)=>http.get("/Service/callback.mi/TopList/TopListDetails.api", {
    t:201910615193270929,
    pageIndex:1,
    type:2,
    toplistId:toplistId,
    pageSubAreaID:toplistId
})