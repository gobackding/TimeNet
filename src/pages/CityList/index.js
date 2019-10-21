import React from "react";
import { connect } from "react-redux";
import { NEWS_ACTION_VALUE, CityListValue } from "@actions/week.js"
import { CityList_Style } from "./styled"
class CityList extends React.Component {
    render() {
        let { cityList, cityHot } = this.props

        return (
            <CityList_Style>
                <div className="HotCity">
                    <h4>热门城市</h4>
                    <ul>
                        {
                            cityHot.map((item, index) => {
                                return <li key={index} onClick={this.props.ClickHandler.bind(this, item)}>{item.n}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="ListOfCities">
                    {
                        cityList.map((item, index) => {
                            return <div className="cityList" key={index}>
                                <h4>{item.index}</h4>
                                <ul>
                                    {
                                        item.list.map((child, idx) => {
                                            return <li key={idx} onClick={this.props.ClickHandler.bind(this, child)}>{child.cityName}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>
            </CityList_Style>
        )
    }
    componentDidMount() {
        this.props.HandlerValue()
    }
}
const mapStateToPropos = (state) => ({
    cityList: state.Find.cityList,
    cityHot: state.Find.cityHot
})
const mapDispatchTPropos = (dispatch) => ({
    HandlerValue() {
        dispatch(NEWS_ACTION_VALUE())
    },
    ClickHandler(item) {
        dispatch(CityListValue(item))
        window.location="http://localhost:3000/#/TicketPurchase"
    }
})

export default connect(mapStateToPropos, mapDispatchTPropos)(CityList)