import Loable from "react-loadable";
import Loading from "@common/loading"

const Home = Loable({
    loader:()=>import("./Home"),
    loading:Loading
})
const TicketPurchase = Loable({
    loader:()=>import("./TicketPurchase"),
    loading:Loading
})
const Shopping = Loable({
    loader:()=>import("./Shopping"),
    loading:Loading
})
const Find = Loable({
    loader:()=>import("./Find"),
    loading:Loading
})
const Mine = Loable({
    loader:()=>import("./Mine"),
    loading:Loading
})

const CityList = Loable({
    loader:()=>import("./CityList"),
    loading:Loading
})

const FilmReview = Loable({
    loader:()=>import("@component/Find/FilmReview"),
    loading:Loading
})
const News = Loable({
    loader:()=>import("@component/Find/News"),
    loading:Loading
})
const RankingList = Loable({
    loader:()=>import("@component/Find/RankingList"),
    loading:Loading
})
const Trailer = Loable({
    loader:()=>import("@component/Find/Trailer"),
    loading:Loading
})
const Detail = Loable({
    loader:()=>import("./Detail"),
    loading:Loading
})


export{
    Home,TicketPurchase,Shopping,Find,Mine,FilmReview,News,RankingList,Trailer,CityList,Detail
}