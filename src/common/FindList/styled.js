import styled from "styled-components";

export const FindLists = styled.div`
    width:100%;
    padding:.1rem 0;
    border-bottom:solid 1px #f4f4f4;
    background:#fff
    ul{
        width:100%;
        display:flex;
        flex:1;
        justify-content: space-around;
    }
    ul,li{
        font-size:.14rem
    }
    .active{
        color:#1e7dd7;
        font-weight:bold
    }
    
`