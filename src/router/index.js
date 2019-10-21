import { Home, TicketPurchase, Shopping, Find, Mine, FilmReview, News, RankingList, Trailer, CityList, Detail } from "@pages/index.js";
import { Search, RankingList_Detail } from "@component/index.js"
export const TabBar = [
    {
        key: "/Home",
        path: "/Home",
        name: "首页",
        component: Home,
        exact: true,
        meta: {
            auto: false,
            flag: true,
            FindList: false
        }
    },
    {
        key: "/TicketPurchase",
        path: "/TicketPurchase",
        name: "购票",
        component: TicketPurchase,
        exact: true,
        meta: {
            auto: false,
            flag: true,
            Find_Bottom: true
        }
    },
    {
        key: "/Shopping",
        path: "/Shopping",
        name: "商城",
        component: Shopping,
        exact: true,
        meta: {
            auto: false,
            flag: true,
            FindList: false
        }
    },
    {
        key: "/Find",
        path: "/Find",
        name: "发现",
        component: Find,
        exact: true,
        meta: {
            auto: false,
            flag: true,
            FindList: true
        },
        children: [
            {
                key: "/News",
                name: "新闻",
                path: "/Find/News",
                component: News,
                exact: true,
                meta: {
                    auto: false,
                    flag: true,
                    FindList: true,
                    Find_Bottom: true
                }
            },
            {
                key: "/FilmReview",
                name: "预告片",
                path: "/Find/FilmReview",
                component: FilmReview,
                exact: true,
                meta: {
                    auto: false,
                    flag: true,
                    FindList: true,
                    Find_Bottom: true
                }
            },
            {
                key: "/RankingList",
                name: "排行榜",
                path: "/Find/RankingList",
                component: RankingList,
                exact: true,
                meta: {
                    auto: false,
                    flag: true,
                    FindList: true,
                    Find_Bottom: true
                }
            },
            {
                key: "/Trailer",
                name: "影评",
                path: "/Find/Trailer",
                component: Trailer,
                exact: true,
                meta: {
                    auto: false,
                    flag: true,
                    FindList: true,
                    Find_Bottom: true
                }
            }
        ]

    }

]
export const Other = [
    {
        key: "/Mine",
        path: "/Mine",
        name: "我的",
        component: Mine,
        exact: true,
        meta: {
            auto: false,
            flag: true,
            FindList: false
        }
    },
    {
        key: "/Search",
        path: "/Search",
        name: "搜索",
        component: Search,
        exact: true,
        meta: {
            auto: false,
            Find_Bottom: true
        }
    },
    {
        key: "/CityList",
        path: "/CityList",
        name: "城市列表",
        component: CityList,
        exact: true,
        meta: {
            auto: false,

        }
    },
    {
        key: "/Detail",
        path: "/Detail",
        name: "详情",
        component: Detail,
        exact: true,
        meta: {
            auto: false,

        }
    },
    {
        key: "/RankingList_Detail",
        path: "/RankingList_Detail",
        name: "排行榜详情",
        component: RankingList_Detail,
        exact: true,
        meta: {
            auto: false,
            Find_Bottom: true
        }
    }
]
export const Combination = TabBar.concat(Other)