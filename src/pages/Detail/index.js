import React from "react";
import { connect } from "react-redux";
import { Detail_Style } from "./styled"
import Banner_Style from "./Banner"
import Detail_One from "./Detail_One"
import { DETAIL_LIST,MOVIE_ID } from "@actions/Detail"
class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            List: this.props.Detail_List_Value,
            indexx:0,
            movieId:0
        }
    }
    render() {
        let { Detail_title, Detail_Banner, BannerIndexValue } = this.props

        return (
            <Detail_Style>
                <div className="Detail_top">
                    <span className="iconfont" onClick={this.props.GoBackClick.bind(this)}>&#xe682;</span>
                    <span className="iconfont share">&#xe61f;</span>
                </div>
                <div className="Detail_address">
                    <div className="Detail_address_left">
                        <h4>{Detail_title}</h4>
                        <p><span>3D</span></p>
                    </div>
                    <ul>
                        <li><span className="iconfont">&#xe614;</span></li>
                        <li><span className="iconfont">&#xe604;</span></li>
                    </ul>
                </div>
                <div className="Detail_Banner">
                    <Banner_Style val={Detail_Banner} />
                </div>
                <div className="Detail_title">
                    {
                        Detail_Banner.map((item, index) => {
                            if (index == BannerIndexValue) {
                                this.props.CinmaIdValue(item.movieId)
                                return <div className="Detail_title_connext" key={index} >
                                    <h4 >{item.title}</h4>
                                    <p><span>{item.length}</span>-<span>{item.type}</span></p>
                                </div>
                            }
                        })
                    }

                    <span className="iconfont details">&#xe682;</span>
                </div>
                <div className="Detail_date">
                    <ul>
                        {
                            Detail_Banner.map((item, index) => {
                                if (index == BannerIndexValue) {
                                   return item.showDates.map((child, idx) => {
                                        return <li key={idx} onClick={this.ClickHandlerIndex.bind(this, child, item,idx)}>{child}</li>
                                    })
                                }
                            })
                        }
                    </ul>
                </div>
                <Detail_One val={BannerIndexValue,{index:this.state.indexx}} />
            </Detail_Style>
        )
    }
    ClickHandlerIndex(child, item,idx) {
        console.log(idx)
        this.setState({
            indexx:child,
            movieId:item.movieId
        })
    }
    componentDidMount() {
        this.props.HandlerValue()
    }
}
const mapStateToProps = (state) => ({
    Detail_title: state.detail.Detail_title,
    Detail_Banner: state.detail.Detail_Banner,
  
    BannerIndexValue: state.detail.BannerIndexValue
})
const mapDispacthToProps = (dispatch) => ({
    HandlerValue() {
        dispatch(DETAIL_LIST())
    },
    CinmaIdValue(movieId){
        dispatch(MOVIE_ID(movieId))
        
    },
    GoBackClick(){
        this.props.history.goBack()
    }
})

export default connect(mapStateToProps, mapDispacthToProps)(Detail)