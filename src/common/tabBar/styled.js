import styled from "styled-components"

export const TabBarDiv = styled.div`
    width:100%;
    background:#1c2635;
    padding:.2rem .1rem;
    font-size:.16rem;
    display:flex;
    
    justify-content: space-around;
 
    img{
        width:.6rem
    }
    ul{
        display:flex;
        height:100%;
        justify-content: space-around;
        flex:1
    }
    .active{
        color:#fff;
        border-bottom:solid 2px #fff;
        padding-bottom:.1rem;
        font-weight:600
    }
    .iconfont{
        font-size:.2rem
    }
`