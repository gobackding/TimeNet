import { createAction } from "redux-actions";

import {Search_List_Value} from "@api/movie"


const Search_List_Style = createAction("search_list_value",data=>data)
export const SEARCH_LIST_VALUE = () => {
    return async (dispatch) => {
       let data=await Search_List_Value()
       dispatch(Search_List_Style(data.keywords))
    }
}