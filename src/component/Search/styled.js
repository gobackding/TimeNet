import styled from "styled-components"


export const Search_Top = styled.div`
    .Search_Top{
        display:flex;
        justify-content: space-between;
    }
    .Search_Top>span{
        flex: 1;
        background: #efeff4;
        border-top: 1px solid #ddd;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:.3rem;
        color:#ccc;
        transform: rotate(180deg);
    }
    .Search_Top_form{
        width:3.5rem
    }
    .am-search {
        border-bottom: 1px solid #ddd;
    }
    .sub-title {
        color: #888;
        font-size: 14px;
        padding: 30px 0 18px 0;
    }
    .Popular_Search{
        display:flex;
        flex-wrap:wrap;
        padding:0 .2rem;
        margin-top:.2rem;
        justify-content:start
    }
    
    .Popular_Search_top{
        width:100%;
        padding:.1rem 0;
        font-size:.16rem;
        color:#666;
        margin-bottom:.1rem
    }
    .Popular_Search_context{
        padding:.05rem .1rem;
        border:solid .01rem #0074c5;
        border-radius:.5rem;
        color:#0074c5;
        font-size:.12rem;
        margin:.1rem 0;
        margin-right:.1rem
    }
`