import styled from "styled-components"

export const NewsDiv = styled.div`
    width:100%;
    overflow:auto;
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
    
    .News_top{
        width:100%;
        height:auto;
        position:relative;
    }
    .News_top,img{
        width:100%
    }
    .News_List{
        width:100%;
        height:auto;
        padding:0 .2rem
    }
    .News_OneImg{
        border-bottom:1px solid #f4f4f4;
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding: .1rem 0;
    }
    .News_OneImg_left{
        width:.9rem;
        height:.9rem;
        flex-shrink: 0;
    }
    .News_OneImg_left>img{
        width:100%;
        height:100%;
        flex-shrink:0;
    }
    .News_OneImg_right{
        margin-left:.2rem;
        display: flex;
        flex-direction: column;
        height: .9rem;
        padding: 0;
        justify-content: space-around;
        
    }
    .News_OneImg_right,h4{
        font-size:.15rem;
        color:#333;
    }
    .News_OneImg_right>span{
        color:#999
    }
    .News_threeImg{
        padding:.1rem 0;
        border-bottom:1px solid #f4f4f4;
    }
    .News_threeImg_left{
        display:flex;
        justify-content:space-between;
        margin-top:.15rem;
        
    }
    .News_threeImg_left>img{
        width:1.1rem;
        height:.78rem
    }
    .News_threeImg_bottom{
        font-size:.14rem;
        margin-top:.1rem;
        color:#ccc
    }
    .News_threeImg_bottom p>i{
        font-style:normal
    }
    
`