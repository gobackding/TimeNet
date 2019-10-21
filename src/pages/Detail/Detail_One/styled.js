import styled from "styled-components"


export const Detail_Style = styled.div`
    ul{
        width:100%;
        padding:0 .2rem;
        background-color:#fff
    }
    ul li{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:.1rem 0;
        border-bottom:1px solid #d8d8d8
    }
    ul li>h4{
        font-size:.25rem;
        color:#333;

    }
    ul li>div{
        display:flex;
        flex-direction:column;
        font-size:.14rem;
        color:#333
    }
    ul li>p{
        font-size:.2rem;
        color:#ff8600;
    }
    ul li>span{
        padding:.05rem .2rem;
        background-color:#ff8600;
        color:#fff;
        border-radius:.5rem
    }

`