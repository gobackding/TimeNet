import styled from "styled-components";

export const FilmReview_Div = styled.div`
    width:100%;
    .FilmReview_Img{
        width:100%;
        background-color:red;
        position: relative;
    }
    .FilmReview_Img>img{
        width:100%
    }
    .FilmReview_Img>p{
        width: 100%;
        position: absolute;
        bottom: 0;
        height: .5rem;
        line-height: .5rem;
        color: #fff;
        font-size: .2rem;
        text-align: center;
        background-color: rgba(0,0,0,0.3);
    }
    .FilmReview_Connect{
        padding:0 .2rem;
        width:100%;
    }
    .FilmReview_Connect>ul{
        width:100%
    }
    .FilmReview_Connect>ul>li{
        width:100%;
        display:flex;
        padding:.1rem 0;
    }
    .FilmReview_Connect_left{
        width:1.5rem;
        height:.89rem;
        flex-shrink:0;
        position: relative;
    }
    .FilmReview_Connect_left img{
        width:100%;
        height:100%
    }
    .FilmReview_Connect_right{
        margin-left:.2rem
    }
    .FilmReview_Connect_right>h4{
        font-size:.18rem;
        color:#333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
         overflow: hidden;
    }
    

` 