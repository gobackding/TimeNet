import { handleActions } from "redux-actions"


const defaultValue = {
    newList: [],
    cityId: JSON.parse(sessionStorage.getItem("cityId")) || 290,
    cityName: JSON.parse(sessionStorage.getItem("cityName")) || "北京",
    cityList: [],
    cityHot:  [],
    TicketPurchaseList: [],
    TicketPurchaseName: "",
    Find_News_Value:[],
    Find_FilmReview_Value:[],
    Find_RankingList_Value:[],
    Find_Trailer_value:[],
    Recommend_Value:[]
}

export default handleActions({
    // 搜索页面中默认推荐
    search_list_value:(state,action)=>{
        let Recommend_Value=Object.assign({},state)
        Recommend_Value.Recommend_Value=action.payload
        return Recommend_Value
    },
    // 影评页面
    Find_Trailer_List_value:(state,action)=>{
        let Find_Trailer_value=Object.assign({},state)
        Find_Trailer_value.Find_Trailer_value=action.payload
        return Find_Trailer_value
    },
    // 排行榜页面
    Find_RankingList_list:(state,action)=>{
        let Find_RankingList_Value = Object.assign({},state)
        Find_RankingList_Value.Find_RankingList_Value=action.payload
        return Find_RankingList_Value
    },
    // 预告片页面
    Find_FilmReview_list:(state,action)=>{
        let Find_FilmReview_Value=Object.assign({},state)
        Find_FilmReview_Value.Find_FilmReview_Value=action.payload
        return Find_FilmReview_Value
    },
    // 页面上的find  新闻页面
    find_news_list:(state,action)=>{
        let findnewsvalue=Object.assign({},state)
        findnewsvalue.Find_News_Value=action.payload
        return findnewsvalue
    },
    city_list_value:  (state, action) => {
        let cityList = Object.assign({}, state)

        cityList.cityName=action.payload.cityName
        cityList.cityId=action.payload.cityId
      
        sessionStorage.setItem("cityName",JSON.stringify(cityList.cityName))
        sessionStorage.setItem("cityId",JSON.stringify(cityList.cityId))
        return cityList;

    },
    // 刚开始的默认列表
    TicketPurchase_value_List: (state, action) => {
        let TicketPurchaseList_Value = Object.assign({}, state)
        TicketPurchaseList_Value.TicketPurchaseList=action.payload.data.cinemaList
        sessionStorage.setItem("TicketPurchaseList",JSON.stringify(action.payload.data.cinemaList))
        return TicketPurchaseList_Value;
    },
    new_action_value: (state, action) => {
        let newWeekState = Object.assign({}, state);
        let cityList = [], cityHot = [], cityListValue = action.payload.p

        for (var i = 0; i < cityListValue.length; i++) {
            if (i < 9) {
                cityHot.push(cityListValue[i])
            }
            var letterFirst = cityListValue[i].pinyinFull.substr(0, 1).toUpperCase();
            if (isCityList(letterFirst)) {
                for (var k = 0; k < cityList.length; k++) {
                    if (letterFirst == cityList[k].index) {
                        cityList[k].list.push({ cityId: cityListValue[i].id, cityName: cityListValue[i].n, cityNum: cityListValue[i].count });
                        break;
                    }
                }
            } else {
                cityList.push({ index: letterFirst, list: [{ cityId: cityListValue[i].id, cityName: cityListValue[i].n, cityNum: cityListValue[i].count }] })
            }
        }
        function isCityList(letterFirst) {
            var bStop = false;
            for (var i = 0; i < cityList.length; i++) {
                if (cityList[i].index == letterFirst) {
                    bStop = true;
                    break;
                }
            }
            return bStop;//存在为true 不存在未false
        }
        cityList.sort((item1, item2) => {
            if (item1.index > item2.index) {
                return 1;
            } else {
                return -1;
            }
        })
        newWeekState.cityList = cityList
        newWeekState.cityHot = cityHot
        sessionStorage.setItem("cityName", JSON.stringify(newWeekState.cityName))
        sessionStorage.setItem("cityId", JSON.stringify(newWeekState.cityId))
        sessionStorage.setItem("cityList", JSON.stringify(cityList))
        sessionStorage.setItem("cityHot", JSON.stringify(cityHot))
        return newWeekState
    }
}, defaultValue)