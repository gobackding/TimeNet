import styled from "styled-components";

export const RankingList_Style = styled.div`
    width:100%;
    background-color:#f4f4f4;
    .RankingList_Detail{
        width:100%;
        height:.52rem;
        background-color:#1c2635;
        display:flex;
        padding-left:.2rem;
        font-size:.4rem;
        color:#fff;
        align-items:center
    }
    .RankingList_Detail_HFour{
        font-size:.2rem;
        color:#333;
        padding:.1rem .3rem;
        text-align:center
    }
    .RankingList_Detail_p{
        font-size:.12rem;
        color:#666;
        padding-left:.2rem;
        margin-bottom:.1rem;
      
    }
    .RankingList_Detail_connect{
        padding:0 0 0 .4rem;
        background-color:#fff;
        border-top:solid 1px #ccc
    }
    .RankingList_Detail_connect>li{
        border-bottom:solid 1px #f4f4f4;
        padding:.2rem .1rem 0;
        position:relative;
    }
    .RankingList_Detail_Film{
        display:flex;
    }
    .RankingList_Detail_Film_left{
        width:.86rem;
        height:1.14rem;
    }
    .RankingList_Detail_Film_left>img{
        width:.86rem;
        height:1.14rem;
    }
    .RankingList_Detail_Film_right{
        flex:1;
        margin-left:.2rem;
    }
    .RankingList_Detail_Film_right>h5{
        font-size:.18rem;
        color:#333;
        font-weight:600;
        display:flex;
    }
    .RankingList_Detail_Film_right>h5 span{
        font-size:.12rem;
        color:#fff;
        padding:0.03rem;
        background-color:#659d0e;
        height: .2rem;
    }
    .RankingList_Detail_Film_right>h6{
        font-size:.12rem;
        color:#999;
        font-weight:100;
        margin-bottom:.2rem
    }
    .RankingList_Detail_Film_right p{
        font-size:.15rem;
        color:#666;
        margin-top:.05rem
    }
    .RankingList_Detail_connect>li>p{
        font-size:.12rem;
        background-color:#f6f6f6;
        margin-top:.2rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
         overflow: hidden;
         color:#666;
    }
    .RankingList_Detail_connect>li>span{
        font-size:.18rem;
        padding:.05rem;
        background-color:orange;
        border-radius:50%;
        color:#fff;
        position:absolute;
        top:.2rem;
        left:-.28rem
    }
    
`