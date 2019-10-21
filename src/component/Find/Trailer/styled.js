import styled from "styled-components";


export const Trailer_Style = styled.div`
    width:100%;
    .Trailer_img{
        width:100%;
        position: relative;
    }
    .Trailer_img>img{
        width:100%
    }
    .Trailer_context{
        padding:.2rem 0 .2rem 1.3rem;
        background-color:rgba(0,0,0,0.3);
        position:absolute;
        width:100%;
        bottom:0;
    }
    .Trailer_context>h4{
        font-size:.18rem;
        color:#fff
    }
    .Trailer_context>p{
        font-size:.13rem;
        color:#fff;
        margin-top:.1rem
    }
    .Trailer_context_position{
        width:.74rem;
        height:1.12rem;
        z-index:2;
        position:absolute;
        bottom:.1rem;
        left:.4rem
    }
    .Trailer_List{
        padding:.1rem 0 .1rem .2rem;
    }
    .Trailer_context_position>img{
        width:100%;
        height:100%;
    }
    .Trailer_List>li>h5{
        font-size:.16rem;
        color:#333
    }
    .Trailer_List>li>p{
        margin-top:.1rem
    }
    .HeadPortrait{
        width:.25rem;
        height:.25rem;
        border-radius:50%;
        overflow:hidden;
        display:inline-block;
    }
    .HeadPortrait>img{
        width:100%;
        height:100%;
    }
    .Trailer_List>li{
        padding: .1rem 0 .1rem 0;
        border-bottom:solid 1px #f4f4f4
    }
    .Trailer_List>li>p{
        font-size:.14rem;
        display: flex;
        align-items: flex-end;
    }
    .Trailer_List>li>p i{
        font-style:normal;
        color:#333
    }
    .Trailer_List>li>p em{
        padding:.02rem;
        color:#fff;
        background-color:#659d0e;
        font-style:normal
    }
    .username{
        margin-left:.1rem;
        color:#666
    }
`