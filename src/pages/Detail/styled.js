import styled from "styled-components";


export const Detail_Style = styled.div`
    .Detail_top{
        width:100%;
        height:.44rem;
        background-color:#1c2635;
        display:flex;
        justify-content:space-between;
        padding:0 .2rem;
        align-items:center;
        font-size:.5rem;
        color:#fff
    }
    .share{
        font-size:.25rem
    }
    .Detail_address{
        width:100%;
        height:.8rem;
        background-color:#fff;
        padding:0 .2rem;
        display:flex;
        justify-content:space-between;
        align-items:center
    }
    .Detail_address ul{
        display:flex
    }
    .Detail_address ul li span{
        font-size:.25rem;
        color:#1e7dd7
    }
    .Detail_address ul li{
        padding: 0 .08rem 0 .08rem;
        border-left:1px solid #d8d8d8
    }
    .space-carousel {
        padding: 16px;
        background: #DEF1E5;
        overflow: hidden;
    }
    .Detail_Banner{
        width:100%;
        height:1.8rem;
        background-color:#fff
    }
    .Banner{
        width:100%
    }
    .Detail_address_left>h4{
        font-size:.18rem;
        color:#333
    }
    .Detail_address_left p{
        margin-top:.1rem
    }
    .Detail_address_left span{
        font-size:.16rem;
        padding:.01rem ;
        border:.01rem solid #659d0e;
        color:#659d0e;
    }
    .Detail_title{
        width:100%;
        height:.6rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        position:relative;
        padding:.2rem 0;
        background-color:#fff
    }
    .Detail_title h4{
        font-size:.2rem;
        color:#333
    }
    .Detail_title p{
        font-size:.15rem;
        color:#666
    }
    .Detail_title_connext{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center
    }
    .details{
        position:absolute;
        font-size:.2rem;
        color:#999;
        right:.2rem;
        transform:rotate(180deg)
    }
    .Detail_date{
        background-color:#f1f1f1;
        color:#333;
        overflow:auto;
        width:100%;
    }
    .Detail_date>ul{
        font-size: .2rem;
    display: -webkit-box;
    /* display: -webkit-flex; */
    display: -ms-flexbox;
    /* display: flex; */
    border-top: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    }
    .Detail_date>ul li {
        padding:.15rem .2rem;
        margin-right:.2rem;
    }
`