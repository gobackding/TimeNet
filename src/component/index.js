import Loable from "react-loadable";
import Loading from "@common/loading"


const Search = Loable({
    loader: () => import("./Search/index.js"),
    loading: Loading
})
const RankingList_Detail = Loable({
    loader: () => import("./RankingList_Detail/index"),
    loading: Loading
})

export {
    Search, RankingList_Detail
}