import styled from "styled-components"

export const RankingLists = styled.div`
    width:100%;
    .RankingList{
        width:100%;
        position: relative;
    }
    .RankingList>img{
        width:100%
    }
    .title{
        width:100%;
        position:absolute;
        bottom:0;
        height:.5rem;
        line-height:.5rem;
        color:#fff;
        font-size:.2rem;
        text-align:center;
        background-color:rgba(0,0,0,0.3)
    }
    .RankingList_List{
        display:flex;
        justify-content:space-around;
        align-items:center;
        padding:.2rem 0;
        border-bottom:1px solid #ccc
    }
    .RankingList_List>li{
        font-size:.18rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center
    }
    .RankingList_List>li>img{
        width:.58rem;
        height:.58rem;
        margin-bottom:.1rem
    }
    .Time{
        color:#1498c9
    }
    .Chinese{
        color:#3bc7c2
    }
    .Global{
        color:#ffc12d
    }
    .Recommended_List{
        padding:0 .2rem;
    }
    .Recommended_List>li{
        display:flex;
        padding:.2rem 0;
        align-items: center;
        justify-content: space-between;
        border-bottom:solid 1px #f4f4f4;
    }
    .Recommended_List_left>h4{
        font-size:.15rem;
        margin-bottom:.1rem;
        width:3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color:#333
    }
    .Recommended_List_left>p{
        font-size:.13rem;
        width:3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color:#999
    }
`