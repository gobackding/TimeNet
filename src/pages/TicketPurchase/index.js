import React from "react";
import { connect } from "react-redux";
import { TicketPurchase_Style } from "./styled"
import { SearchBar } from 'antd-mobile';
import ConditionalQuery from "@component/ConditionalQuery"
import TicketPurchase_List from "@component/TicketPurchase_List"
import { TicketPurchase_LIST } from "@actions/week.js"

class TicketPurchase extends React.Component {
    state = {
        value: '美食',
    };
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    render() {
        let {cityName} = this.props
        return (
            <TicketPurchase_Style>
                <div className="TicketPurchase_search">
                    <div className="TicketPurchase_city" onClick={this.props.ClickTo.bind(this)}>
                        {cityName}
                        <span>></span>
                    </div>
                    <SearchBar className="Search_Top_form" placeholder="筛选影院" ref={ref => this.autoFocusInst = ref} />
                </div>
                <ConditionalQuery />
                <TicketPurchase_List />
            </TicketPurchase_Style>
        )
    }
    componentDidMount() {
        this.props.HandlerValue()
    }
}
const mapStateToProps = (state) => ({
    cityName:state.Find.cityName
})
const mapDispacthToProps = (dispatch) => ({
    HandlerValue() {
        dispatch(TicketPurchase_LIST())
    },
    ClickTo(){
        this.props.history.push("/CityList")
    }
})

export default connect(mapStateToProps, mapDispacthToProps)(TicketPurchase)