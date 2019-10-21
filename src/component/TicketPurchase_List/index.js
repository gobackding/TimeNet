import React from "react";
import { connect } from "react-redux"
import { TicketPurchase_List_Style } from "./styled"
import { TicketPurchase_LIST } from "@actions/week"
import { CINMA_ID } from "@actions/Detail"
class TicketPurchase_List extends React.Component {
    
    render() {
        let { TicketPurchaseList } = this.props
        return (
            <TicketPurchase_List_Style>
                <ul>
                    <li className="introduce">以下影院均非时光网自营</li>
                    {
                        TicketPurchaseList.map((item, index) => {
                            return <li className="TicketPurchase_List" key={index} onClick={this.props.ClickHandlerItem.bind(this,item)}>
                                <div className="TicketPurchase_List_title">
                                    <h4>{item.cinameName}</h4>
                                    <p><span>{item.minPrice / 100}</span>元起</p>
                                </div>
                                <p>{item.address}</p>
                                <div className="TicketPurchase_List_Label">
                                    <span>3D</span>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </TicketPurchase_List_Style>
        )
    }
    componentDidMount() {
        this.props.Handler()
    }
}
const mapStateToProps = (state) => ({
    TicketPurchaseList: state.Find.TicketPurchaseList
})
const mapDispatchTPropos = (dispatch) => ({
    Handler() {
        dispatch(TicketPurchase_LIST())
    },
    ClickHandlerItem(item){
        console.log(item.cinemaId)
        dispatch(CINMA_ID(item.cinemaId))
        window.location="http://localhost:3000/#/Detail"
    }
})
export default connect(mapStateToProps, mapDispatchTPropos)(TicketPurchase_List)