import styled from "styled-components";

export const TicketPurchase_List_Style=styled.div`
    ul{
        padding:.1rem .1rem;
        background-color:#fff
    }
    .introduce{
        padding:.05rem 0;
        text-align:center;
        background-color:#f4f4f4;
        font-size:.12rem;
        color:#999
    }
    .TicketPurchase_List{
        padding:.1rem 0;
    }
    .TicketPurchase_List_title{
        display:flex;
        justify-content:space-between; 
        align-items: flex-end;
    }
    .TicketPurchase_List_title>h4{
        font-size:.14rem;
        color:#666
    }
    .TicketPurchase_List_title>p{
        font-size:.1rem;
        color:#ff8600;
    }
    .TicketPurchase_List_title>p span{
        font-size:.18rem;
    }
    .TicketPurchase_List>p{
        font-size:.12rem;
        color:#777;
        margin-top:.1rem
    }
    .TicketPurchase_List_Label{
        margin-top:.1rem
    }
    .TicketPurchase_List_Label>span{
        font-size:.12rem;
        border:1px solid #6d8297 ;
        color:#6d8297;
        margin-right: .3125rem;
        padding: .0125rem;
    }
`